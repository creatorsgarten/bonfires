import {isPromise} from '../utils/promise'

import {IStore, CombinedModuleFn} from '../@types'
import {HandlersMap} from '../@types/IStore'
import {EventsOf, ExtractModules, StateOf} from 'src/@types/IModule'

export const createStore = <
  M extends any[],
  Modules = ExtractModules<M>,
  S = StateOf<Modules>,
  E = EventsOf<Modules>
>(
  ...modules: M
): IStore<S, E> => {
  let state: S = {} as S
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

  for (const module of modules) {
    module(store)
  }

  store.run('@setup', undefined)

  return store
}
