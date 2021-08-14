import {Event} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

describe('Event Core', () => {
  it('can attach modules', () => {
    const event = Event.create().use(Notion).use(Agenda)

    const notion = event.registry.get('eventkit/notion')
    expect(notion.context).toHaveProperty('token')

    const agenda = event.registry.of(Agenda)!
    expect(agenda.data).toHaveProperty('slots')
  })
})
