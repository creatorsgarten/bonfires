import {Event} from '@eventkit/core'
import {EventStatus} from './IEvent'

type IEventHandler = (event: Event) => Promise<void> | void

interface EventHandlers {
  /** Run after the extension is registered with the event. */
  setup: IEventHandler

  /** Run after the event is created or changed back to draft mode. */
  [EventStatus.Draft]: IEventHandler

  /** Run after the event is published to all social channels. */
  [EventStatus.Published]: IEventHandler

  /** Run after the event is live, i.e. happening right now. */
  [EventStatus.Live]: IEventHandler

  /** Run after the event is archived. */
  [EventStatus.Archived]: IEventHandler
}

type EventHandlerMap = {
  [K in keyof EventHandlers]?: EventHandlers[K] | EventHandlers[K][]
}

export type IExtensionEventType = keyof EventHandlers

export interface IExtension {
  id: string
  title: string
  enabled?: boolean
  on?: EventHandlerMap
}
