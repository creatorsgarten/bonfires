import {createRegistry} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

describe('Typed Module Registry', () => {
  it('can attach the module to the registry', () => {
    const reg = createRegistry().use(Notion).use(Agenda)

    expect(reg.data).toHaveProperty('eventkit/agenda')
    expect(reg.data).toHaveProperty('eventkit/notion')

    const notion = reg.get('eventkit/notion')
    expect(notion.context.token).toBe('default-notion-token')

    const agenda = reg.get('eventkit/agenda')
    agenda.data.slots.push({start: new Date(), title: 'Slot 2'})

    const state = reg.data['eventkit/agenda']
    expect(state.slots[0]?.title).toBe('Slot 2')
  })
})
