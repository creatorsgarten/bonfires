import {Registry, EventStatus} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

describe('Typed Module Registry', () => {
  it('can attach the module to the registry', () => {
    const r = Registry.create().use(Notion).use(Agenda)

    expect(r.data).toHaveProperty('eventkit/agenda')
    expect(r.data).toHaveProperty('eventkit/notion')

    const notion = r.get('eventkit/notion')
    expect(notion.context.token).toBe('default-notion-token')

    const agenda = r.get('eventkit/agenda')
    agenda.data.slots.push({start: new Date(), title: 'Slot 2'})

    const state = r.data['eventkit/agenda']
    expect(state.slots[0]?.title).toBe('Slot 2')

    r.ready()
    r.bus.emit(EventStatus.Live)
    expect(r.of(Notion)?.context.token).toBe('Slot 2')
  })
})
