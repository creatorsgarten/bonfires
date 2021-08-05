import {Event} from '@eventkit/core'

type IEventHandler = (event: Event) => Promise<void> | void

interface EventHandlers {
  /** Run after the extension is registered with the event. */
  setup: IEventHandler

  /** Run after the event is created or changed back to draft mode. */
  draft: IEventHandler

  /** Run after the event is published to all social channels. */
  published: IEventHandler

  /** Run after the event is live, i.e. happening right now. */
  live: IEventHandler

  /** Run after the event is archived. */
  archived: IEventHandler
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
