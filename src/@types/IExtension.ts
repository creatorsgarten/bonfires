import {Event} from '@eventkit/core'
import {EventStatus} from './IEvent'

type IEventHandler = (event: Event) => Promise<void> | void

export interface IExtensionEventHandlers {
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

export interface IExtensionMeta {
  id: string
  title: string
}

export type IEventHandlerMap = {
  [K in keyof IExtensionEventHandlers]?: IExtensionEventHandlers[K][]
}

export type IExtensionEventType = keyof IExtensionEventHandlers
