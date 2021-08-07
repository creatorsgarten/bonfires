import {
  Event,
  Extension,
  EventStatus,
  IExtensionEventType,
  DuplicateExtensionError,
} from '@eventkit/core'

type Constructor<T extends {} = {}> = new (...args: any[]) => T
type ExtensionClass = Constructor<Extension<any, any>>

export class ExtensionManager {
  event: Event
  extensions: Extension[] = []

  constructor(event: Event) {
    this.event = event
  }

  has(id: string): boolean {
    return this.extensions.some((ext) => ext.id === id)
  }

  getById<T extends Extension>(id: string): T | null {
    const extension = this.extensions.find((ext) => ext.id === id)
    if (!extension) return null

    return extension as T
  }

  get<T extends ExtensionClass>(extension: T): InstanceType<T> | null {
    const ext = this.extensions.find((ext) => ext instanceof extension)
    if (!ext) return null

    return ext as InstanceType<T>
  }

  async use(extension: Extension) {
    // Prevent adding duplicate extensions.
    if (this.has(extension.id)) {
      throw new DuplicateExtensionError(extension)
    }

    this.extensions.push(extension)

    await this.emitTo('setup', extension)
    await this.emitTo(EventStatus.Draft, extension)
  }

  async emitTo<T extends IExtensionEventType, U>(
    type: T,
    extension: Extension,
    data?: U
  ) {
    const handler = extension.handlers?.[type]
    if (!handler) return

    const handlers = Array.isArray(handler) ? handler : [handler]

    for (const handler of handlers) {
      await handler(this.event, data)
    }
  }

  async emit<T extends IExtensionEventType, U>(type: T, data?: U) {
    for (let extension of this.extensions) {
      await this.emitTo(type, extension, data)
    }
  }
}
