import {createStore} from '@eventkit/core'

interface IAgenda {
  slots: string[]
}

interface Events {
  add: string
}

describe('Create Standalone Store', () => {
  it('can dispatch events', () => {
    let state: IAgenda = {slots: []}

    const store = createStore<IAgenda, Events>()
    store.get = () => state
    store.set = (s) => (state = s)

    store.on('add', (s, slot) => ({
      ...s,
      slots: [...s.slots, slot],
    }))

    store.run('add', 'Opening Session')
    store.run('add', 'First Talk')

    expect(state).toBe(store.get())
    expect(state.slots[0]).toBe('Opening Session')
    expect(state.slots[1]).toBe('First Talk')
  })
})
