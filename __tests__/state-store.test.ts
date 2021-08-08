import {createStore, EventModule, EventStatus} from '@eventkit/core'

describe('State Store', () => {
  it('should be able to create a new state store', () => {
    const s = createStore(EventModule)
    expect(s.state.event.status).toBe(EventStatus.Draft) //?

    s.run('event/live', undefined)
    expect(s.state.event.status).toBe(EventStatus.Live) //?
  })
})
