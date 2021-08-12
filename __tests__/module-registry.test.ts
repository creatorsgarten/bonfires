import {ModuleRegistry, DuplicateModuleError, EventStatus} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

describe('Module Registry', () => {
  it('should be able to register modules', () => {
    const r = new ModuleRegistry()
    r.use(Notion)

    expect(r.has(Agenda)).toBe(false)
    expect(r.get(Notion).context.token).toBe('default-notion-token')
  })

  it('should be able to register module instances', () => {
    const r = new ModuleRegistry()
    r.register(new Notion())

    expect(r.has(Agenda)).toBe(false)
    expect(r.has(Notion)).toBe(true)
  })

  it('should throw an error when registering duplicate modules', () => {
    const r = new ModuleRegistry()
    r.use(Notion)

    expect(() => r.use(Notion)).toThrow(DuplicateModuleError)
  })

  it('should be able to call module event listeners', () => {
    const r = new ModuleRegistry()
    r.use(Notion)
    r.use(Agenda)
    expect(r.get(Notion).context.token).toBe('default-notion-token')

    r.get(Agenda).data.slots = ['agenda-slot-token']
    expect(r.data['eventkit/agenda'].slots[0]).toBe('agenda-slot-token')

    r.ready()
    r.bus.emit(EventStatus.Live)
    expect(r.get(Notion).context.token).toBe('agenda-slot-token')
  })
})
