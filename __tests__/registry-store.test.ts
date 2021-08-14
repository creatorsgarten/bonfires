import {Registry} from '@eventkit/core'
import {Agenda} from '@eventkit/modules'

describe('Registry Store', () => {
  it('should be able to dispatch events', () => {
    const r = Registry.create().use(Agenda)

    const agenda = r.get('eventkit/agenda')
    expect(agenda.store.handlers).toHaveProperty('agenda/add')

    agenda.store.run('agenda/add', {title: 'Third Talk', start: new Date()})

    expect(agenda.store.get()).toBe(agenda.data)
    expect(agenda.data.slots[0]?.title).toBe('Third Talk')
  })
})
