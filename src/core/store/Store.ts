export interface Store<S = any, E = Record<any, any>> {
  handlers: {
    [T in keyof E]?: ((s: S, p: E[T]) => S)[]
  }

  set(data: S): void
  get(): S

  run<T extends keyof E>(type: T, payload: E[T]): void
  on<T extends keyof E>(type: T, handler: (state: S, payload: E[T]) => S): void
}

interface IOptions<S, E> {
  get?(): S
  set?(data: S): void
}

export const createStore = <S, E>(options?: IOptions<S, E>): Store<S, E> => {
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
