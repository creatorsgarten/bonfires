export interface Store<S = any, E = Record<any, any>> {
  set(data: S): void
  get(): S

  run<T extends keyof E>(type: T, payload: E[T]): void
  on<T extends keyof E>(type: T, handler: (state: S, payload: E[T]) => S): void
}

export const createStore = <S, E>(): Store<S, E> => {
  let handlerMap: {
    [T in keyof E]?: ((s: S, p: E[T]) => S)[]
  } = {}

  const store: Store<S, E> = {
    set: () => {},
    get: () => ({} as S),

    on(type, handler) {
      handlerMap[type] = [...(handlerMap[type] ?? []), handler]
    },
    run(type, payload) {
      handlerMap[type]?.forEach((h) => this.set(h(this.get(), payload)))
    },
  }

  return store
}
