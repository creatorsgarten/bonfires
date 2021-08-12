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
