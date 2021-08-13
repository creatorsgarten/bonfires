import {createRegistry} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

describe('Typed Module Registry', () => {
  it('can attach the module to the registry', () => {
    const r = createRegistry().use(Notion).use(Agenda)

    expect(r.state).toHaveProperty('eventkit/agenda')
    expect(r.state).toHaveProperty('eventkit/notion')

    const notion = r.get('eventkit/notion')
    expect(notion.context.token).toBe('default-notion-token')

    const agenda = r.get('eventkit/agenda')
    agenda.data.slots.push({start: new Date(), title: 'Slot 2'})

    const state = r.state['eventkit/agenda']
    expect(state.slots[0]?.title).toBe('Slot 2')
  })
})
