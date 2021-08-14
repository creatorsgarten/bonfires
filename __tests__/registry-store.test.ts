import {Registry} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

describe('Registry Store', () => {
  it('can dispatch events using the registry', () => {
    const r = Registry.create().use(Agenda).use(Notion)

    const agenda = r.get('eventkit/agenda')
    expect(agenda.store.handlers).toHaveProperty('agenda/add')

    r.run('agenda/add', {title: 'Third Talk', start: new Date()})

    expect(agenda.store.get()).toBe(agenda.data)
    expect(agenda.data.slots[0]?.title).toBe('Third Talk')
  })
})
