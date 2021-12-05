import { EventStatus } from '../../@types/event/EventStatus'

type Handler = () => void

type Events = EventStatus
type HandlersMap = Record<Events, Handler[]>

export class EventBus {
  handlers: Partial<HandlersMap> = {}

  on<T extends Events>(type: T, handler: Handler) {
    const handlers = this.handlers[type] ?? []

    this.handlers = { ...this.handlers, [type]: [...handlers, handler] }
  }

  emit<T extends Events>(type: T) {
    const handlers = this.handlers[type]

    handlers?.forEach((handler) => handler())
  }
}
