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
