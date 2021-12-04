import {EventType} from './EventType'
import {EventStatus} from './EventStatus'

export interface IEvent {
  id: string
  title: string

  type: EventType
  status: EventStatus

  datetime: {
    start: Date
    end: Date
  }

  location?: string
  isOnline?: boolean
}

export type CreateEventInput = Omit<IEvent, 'id' | 'status'>
