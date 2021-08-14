import {Event, CreateEventInput} from '@eventkit/core'
import {Agenda} from '@eventkit/modules'

import {MockModule} from './fixtures/mock-module'

describe('Event Core', () => {
  it('can attach modules', () => {
    const data: CreateEventInput = {
      title: 'GraphQL Meetup',
      type: 'meetup',
      datetime: {start: new Date(), end: new Date()},
    }

    const event = Event.create(data).use(MockModule).use(Agenda)

    const mock = event.registry.get('eventkit/mock')
    expect(mock.data.summary).toHaveProperty('firstTalk')

    const agenda = event.registry.of(Agenda)!
    expect(agenda.data).toHaveProperty('slots')
  })
})
