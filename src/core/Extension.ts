import {
  IExtensionMeta,
  IEventHandlerMap,
  IExtensionEventType,
  IExtensionEventHandlers,
} from '../@types/IExtension'

export const id = <K extends string>(key: K): K => key
export const meta = (m: IExtensionMeta) => m

export abstract class Extension<ID extends string = string, T = unknown> {
  abstract id: ID
  abstract meta: IExtensionMeta

  data: T | null = {} as T
  handlers: IEventHandlerMap

  constructor() {
    this.handlers = {}
  }

  on<T extends IExtensionEventType>(
    type: T,
    handler: IExtensionEventHandlers[T]
  ) {
    if (!this.handlers[type]) {
      this.handlers[type] = []
    }

    this.handlers[type]?.push(handler.bind(this))
  }
}
