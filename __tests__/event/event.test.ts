import {Event, CreateEventInput} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

import {MockModule} from '../fixtures/mock-module'
import {mockNotionContext} from '../fixtures/notion-context'

describe('Event', () => {
  it('can attach modules to event', async () => {
    const data: CreateEventInput = {
      title: 'GraphQL Meetup',
      type: 'meetup',
      datetime: {start: new Date(), end: new Date()},
    }

    const event = Event.create(data)
      .use(MockModule)
      .use(Agenda)
      .use(Notion, mockNotionContext)

    const mock = event.module.get('eventkit/mock')
    expect(mock.data.summary).toHaveProperty('firstTalk')

    const agenda = event.module.of(Agenda)!
    expect(agenda.data).toHaveProperty('slots')

    const notion = event.module.get('notion')
    await expect(notion.users()).resolves.toHaveLength(2)
  })
})
