import {
  EventStatus,
  DynamicRegistry,
  DuplicateModuleError,
} from '@eventkit/core'

import {Agenda} from '@eventkit/modules'

import {MockModule} from '../fixtures/mock-module'

describe('Dynamic Module Registry', () => {
  it('can register modules', () => {
    const r = new DynamicRegistry()
    r.use(MockModule)

    expect(r.has(Agenda)).toBe(false)
    expect(r.of(MockModule)?.data.summary.firstTalk).toBe('N/A')
  })

  it('can register module instances', () => {
    const r = new DynamicRegistry()
    r.register(new MockModule())

    expect(r.has(Agenda)).toBe(false)
    expect(r.has(MockModule)).toBe(true)
  })

  it('should throw an error when registering duplicate modules', () => {
    const r = new DynamicRegistry()
    r.use(MockModule)

    expect(() => r.use(MockModule)).toThrow(DuplicateModuleError)
  })

  it('can call module event listeners', () => {
    const r = new DynamicRegistry()
    r.use(MockModule)
    r.use(Agenda)
    expect(r.of(MockModule)?.data.summary.firstTalk).toBe('N/A')

    const agenda = r.of(Agenda)
    if (agenda) agenda.data.slots = [{title: 'Talk 1', start: new Date()}]

    expect(r.data['eventkit/agenda'].slots[0].title).toBe('Talk 1')

    r.ready()
    r.bus.emit(EventStatus.Live)
    expect(r.of(MockModule)?.data.summary.firstTalk).toBe('Talk 1')
  })
})
