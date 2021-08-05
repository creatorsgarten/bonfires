export interface ICreateEventInput {
  /** Event's Public Title */
  title: string

  /** Event Type */
  type: IEventType

  /** When will the event be hosted? */
  when: IEventDateTimeInput

  /** Will the event be hosted online? */
  online?: boolean
}

export interface IEvent extends Omit<ICreateEventInput, 'when'> {
  // Event ID
  id: string

  /** When will the event be hosted? */
  when: Date | [Date, Date]

  /** Status of the event **/
  status: EventStatus
}

export enum EventStatus {
  /** Event is currently in draft mode. */
  Draft = 'draft',

  /** Event is published to ticketing systems and all social channels. */
  Published = 'published',

  /** Event is now in session! */
  Live = 'live',

  /** Event has ended. */
  Archived = 'archived',
}

export type IEventType =
  | 'conference'
  | 'meetup'
  | 'hackathon'
  | 'bootcamp'
  | 'event'

/**
 * "9PM Today"
 * "9PM - 5PM Tomorrow"
 * Date.now()
 **/
export type IEventDateTimeInput =
  | string
  | [string, string]
  | Date
  | [Date, Date]
