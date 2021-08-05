import {
  IExtensionMeta,
  IEventHandlerMap,
  IExtensionEventType,
  ExtensionEventHandlers,
} from '../@types/IExtension'

type IBaseExtensionOptions = IExtensionMeta

export class Extension {
  meta: IExtensionMeta
  handlers: IEventHandlerMap

  constructor(options: IBaseExtensionOptions) {
    const {id, title} = options

    this.meta = {id, title}
    this.handlers = {}
  }

  on<T extends IExtensionEventType>(
    type: T,
    handler: ExtensionEventHandlers[T]
  ) {
    if (!this.handlers[type]) {
      this.handlers[type] = []
    }

    this.handlers[type]?.push(handler.bind(this))
  }
}
