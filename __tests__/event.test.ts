import {Event, EventStatus} from '@eventkit/core'
import {Notion} from '@eventkit/extensions'

const mockEvent = () =>
  new Event({
    title: 'GraphQL Meetup 10.0',
    type: 'meetup',
    when: ['19 August', '20 August'],
    online: true,
  })

describe('Event', () => {
  it('should be able to publish the event', () => {
    const event = mockEvent()
    event.use(Notion())

    expect(event.data.status).toBe(EventStatus.Draft)

    event.publish()
    expect(event.data.status).toBe(EventStatus.Published)
  })
})
