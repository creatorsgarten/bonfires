import { UnionToIntersection } from 'type-fest'

import { Module } from '@eventkit/core'

export interface Store<S = any, E = Record<any, any>> {
  handlers: {
    [T in keyof E]?: ((s: S, p: E[T]) => S)[]
  }

  set(data: S): void
  get(): S

  run<T extends keyof E>(type: T, payload: E[T]): void
  on<T extends keyof E>(type: T, handler: (state: S, payload: E[T]) => S): void
}

export type CombinedEvents<M extends Module[]> = UnionToIntersection<
  {
    [K in keyof M]: M[K] extends Module<infer E>
      ? E extends Record<string, any>
        ? E
        : never
      : never
  }[number]
>
