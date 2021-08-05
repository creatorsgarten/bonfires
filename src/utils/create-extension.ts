import {
  Extension,
  IExtensionMeta,
  IExtensionEventHandlers,
} from '@eventkit/core'

type IOptions = IExtensionMeta & {on?: Partial<IExtensionEventHandlers>}

export function createExtension(options: IOptions) {
  const SimpleExtension = class extends Extension {
    constructor() {
      super(options)

      for (let event in options.on) {
        let type = event as keyof IExtensionEventHandlers
        const handler = options.on?.[type]

        if (handler) this.on(type, handler)
      }
    }
  }

  Object.defineProperty(SimpleExtension, 'name', {value: options.id})

  return SimpleExtension
}
