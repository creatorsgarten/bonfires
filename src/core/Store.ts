import {isPromise} from '../utils/promise'

import {HandlersMap, IStore} from '../@types/IStore'

export const createStore = <S, E>(initialState: S): IStore<S, E> => {
  let state = initialState
  let events: HandlersMap<S, E> = {}

  const store: IStore<S, E> = {
    set(nextState) {
      state = nextState
    },

    on(event, handler) {
      const handlers = events[event] ?? []

      events = {...events, [event]: [...handlers, handler]}
    },

    run(event, data) {
      const handlers = events[event] ?? []
      if (handlers.length === 0) return

      for (const handler of handlers) {
        const nextState = handler(state, data)
        if (nextState === undefined) continue
        if (isPromise(nextState)) continue

        store.set(nextState)
      }

      if (event !== '@run') {
        store.run('@run', [event, data])
      }
    },

    get: () => state,

    get state() {
      return state
    },
  }

  store.run('@init', undefined)

  return store
}
