import {createStore} from '@eventkit/core'

interface IAgenda {
  slots: string[]
}

interface Events {
  'agenda/add': string
}

describe('State Store', () => {
  it('should be able to dispatch events', () => {
    let state: IAgenda = {slots: []}

    const store = createStore<IAgenda, Events>()
    store.get = () => state
    store.set = (s) => (state = s)

    store.on('agenda/add', (s, slot) => ({
      ...s,
      slots: [...s.slots, slot],
    }))

    store.run('agenda/add', 'Opening Session')
    store.run('agenda/add', 'First Talk')

    expect(state).toEqual(store.get())
    expect(state.slots[0]).toBe('Opening Session')
    expect(state.slots[1]).toBe('First Talk')
  })
})
