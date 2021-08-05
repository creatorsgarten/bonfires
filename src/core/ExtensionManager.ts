import {
  Event,
  Extension,
  EventStatus,
  IExtensionEventType,
  DuplicateExtensionError,
} from '@eventkit/core'

export class ExtensionManager {
  event: Event
  extensions: Extension[] = []

  constructor(event: Event) {
    this.event = event
  }

  has(id: string): boolean {
    return this.extensions.some((ext) => ext.meta.id === id)
  }

  get(id: string): Extension | null {
    return this.extensions.find((ext) => ext.meta.id === id) ?? null
  }

  async use(extension: Extension) {
    // Prevent adding duplicate extensions.
    if (this.has(extension.meta.id)) {
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
