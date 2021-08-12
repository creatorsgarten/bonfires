import {
  Extension,
  IExtensionMeta,
  IExtensionEventHandlers,
} from '@eventkit/core'

type IOptions<K extends string> = IExtensionMeta & {
  id: K
  on?: Partial<IExtensionEventHandlers>
}

export function createExtension<K extends string>(options: IOptions<K>) {
  const {title} = options

  const SimpleExtension = class extends Extension {
    id = options.id
    meta = {title}

    constructor() {
      super()

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
