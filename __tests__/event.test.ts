import {Event} from '@eventkit/core'
import {Notion} from '@eventkit/extensions'

describe('Event', () => {
  it('should create an event', () => {
    const event = new Event({
      title: 'GraphQL Meetup 10.0',
      type: 'meetup',
      when: ['19 August', '20 August'],
      online: true,
    })

    event.use(Notion())
    event.use(Notion()).catch((error) => {
      error.message //?
    })
  })
})
