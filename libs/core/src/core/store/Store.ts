import { Store } from '@eventkit/core'

interface IOptions<S> {
  get?(): S
  set?(data: S): void
}

export const createStore = <S, E>(options?: IOptions<S>): Store<S, E> => {
  const store: Store<S, E> = {
    handlers: {},

    // Stubs
    set: () => {},
    get: () => ({} as S),

    on(type, handler) {
      this.handlers[type] = [...(this.handlers[type] ?? []), handler]
    },

    run(type, payload) {
      this.handlers[type]?.forEach((h) => this.set(h(this.get(), payload)))
    },
  }

  if (options?.set) store.set = options.set
  if (options?.get) store.get = options.get

  return store
}
