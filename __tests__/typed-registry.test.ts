import {Registry, EventStatus} from '@eventkit/core'
import {Agenda} from '@eventkit/modules'

import {MockModule} from './fixtures/mock-module'

describe('Typed Module Registry', () => {
  it('can attach the module to the registry', () => {
    const r = Registry.create().use(MockModule).use(Agenda)

    expect(r.data).toHaveProperty('eventkit/agenda')
    expect(r.data).toHaveProperty('eventkit/mock')

    const notion = r.get('eventkit/mock')
    expect(notion.data.summary.firstTalk).toBe('N/A')

    const agenda = r.get('eventkit/agenda')
    agenda.data.slots.push({start: new Date(), title: 'Talk A'})

    const state = r.data['eventkit/agenda']
    expect(state.slots[0]?.title).toBe('Talk A')

    r.bus.emit(EventStatus.Live)
    expect(r.of(MockModule)?.data.summary.firstTalk).toBe('Talk A')
  })
})
