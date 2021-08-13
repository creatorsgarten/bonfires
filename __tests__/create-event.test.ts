import {createEvent, EventStatus} from '@eventkit/core'

describe('Create Event', () => {
  it('should create an event in draft state', () => {
    const event = createEvent({
      title: 'EventKit Meetup',
      type: 'meetup',
      datetime: {start: new Date(), end: new Date()},
    })

    expect(event).toHaveProperty('id')
    expect(event.status).toBe(EventStatus.Draft)
  })
})
