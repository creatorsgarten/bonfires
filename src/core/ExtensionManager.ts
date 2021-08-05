import {
  Event,
  IExtension,
  EventStatus,
  IExtensionEventType,
  DuplicateExtensionError,
} from '@eventkit/core'

export class ExtensionManager {
  event: Event
  extensions: IExtension[] = []

  constructor(event: Event) {
    this.event = event
  }

  has(id: string): boolean {
    return this.extensions.some((ext) => ext.id === id)
  }

  get(id: string): IExtension | null {
    return this.extensions.find((ext) => ext.id === id) ?? null
  }

  async use(extension: IExtension) {
    // Prevent adding duplicate extensions.
    if (this.has(extension.id)) {
      throw new DuplicateExtensionError(extension)
    }

    this.extensions.push({...extension, enabled: true})

    await this.emitTo('setup', extension)
    await this.emitTo(EventStatus.Draft, extension)
  }

  async emitTo<T extends IExtensionEventType, U>(
    type: T,
    extension: IExtension,
    data?: U
  ) {
    const handler = extension.on?.[type]
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
