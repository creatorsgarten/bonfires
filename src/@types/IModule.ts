import {IStore, PrefixEvents} from '.'

export interface IModule<
  S,
  E,
  ID extends string,
  Deps extends readonly IModule<any, any, any, any>[] = any[]
> {
  id: ID
  initialState?: S
  setup?(store: IStore<S, E>): void

  uses?: Deps
}

export type NameOf<M> = M extends IModule<any, any, infer ID> ? ID : never

export type CombineModule<
  MA extends any[],
  MD = {
    [K in keyof MA as NameOf<MA[K]>]: K extends string ? MA[K] : never
  }
> = MD

export type RootModuleOf<M extends Record<any, IModule<any, any, any>>> = {
  state: StateOf<M>
  events: EventsOf<M>
}

export type StateOf<RRR> = {
  [K in keyof RRR]: RRR[K] extends IModule<infer S, infer E, infer ID>
    ? S
    : never
}

export type EventsOf<M> = PrefixEvents<
  {
    [K in keyof M]: M[K] extends IModule<infer S, infer E, infer ID> ? E : never
  }
>
