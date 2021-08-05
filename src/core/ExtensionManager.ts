import {Event, IExtension, IExtensionEventType} from '@eventkit/core'
import {DuplicateExtensionError} from '@eventkit/core'

export class ExtensionManager {
  event: Event
  extensions: IExtension[] = []

  constructor(event: Event) {
    this.event = event
  }

  has(name: string) {
    return this.extensions.some((extension) => extension.id === name)
  }

  async use(extension: IExtension) {
    // Prevent adding duplicate extensions.
    if (this.has(extension.id)) {
      throw new DuplicateExtensionError(extension)
    }

    this.extensions.push({...extension, enabled: true})

    await this.emit('setup', extension)
    await this.emit('draft', extension)
  }

  async emit<T extends IExtensionEventType, U>(
    type: T,
    extension: IExtension,
    data?: U
  ) {
    const handler = extension.on?.[type]
    if (!handler) return

    let handlers = Array.isArray(handler) ? handler : [handler]

    for (const handler of handlers) {
      await handler(this.event, data)
    }
  }
}
