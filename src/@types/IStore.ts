export type MaybeAsync<T> = T | Promise<T>

export interface SysEvents {
  '@setup': any
  '@run': any
  '@changed': []
}

export type Reducer<S, P> = (state: S, data: P) => MaybeAsync<S | void>

export type HandlerMap<S, E, E2 = E & SysEvents> = {
  [T in keyof E2]?: Reducer<S, E2[T]>
}

export type HandlersMap<S, E, E2 = E & SysEvents> = {
  [T in keyof E2]?: Reducer<S, E2[T]>[]
}

export type OnFn<S, E> = <T extends keyof E>(
  event: T,
  handler: Reducer<S, E[T]>
) => void

export type RunFn<E> = <T extends keyof E>(event: T, data: E[T]) => void

export interface IStore<S, E, E2 = E & SysEvents> {
  readonly state: S

  get: () => S
  set: (state: S) => void

  run: RunFn<E2>
  on: OnFn<S, E2>
}
