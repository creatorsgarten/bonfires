import {
  createStore,
  EventModule,
  EventStatus,
  IModule,
  ModuleFn,
} from '@eventkit/core'

import {NotionModule} from '../src/modules/notion'

describe('State Store', () => {
  it('should be able to create a new state store', () => {
    const s = createStore(EventModule)
    expect(s.state.event.status).toBe(EventStatus.Draft) //?

    s.run('event/live', undefined)
    expect(s.state.event.status).toBe(EventStatus.Live) //?
  })

  it('should be able to create combined state store', () => {
    const s = createStore(NotionModule)

    s.run('event/live', undefined)
    s.run('notion/createPage', '42')
    s.run('agenda/add', 3)
  })
})
