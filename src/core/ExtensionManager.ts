import {IExtension, IExtensionEventType} from '@eventkit/core'

export class ExtensionManager {
  extensions: IExtension[] = []

  has(name: string) {
    return this.extensions.some((extension) => extension.name.includes(name))
  }

  async use(extension: IExtension) {
    this.extensions.push(extension)

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
      await handler(this, data)
    }
  }
}
