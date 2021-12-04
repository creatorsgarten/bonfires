import {Constructor} from 'type-fest'
import {Module, EventBus} from '@eventkit/core'

export type NameOf<T> = T extends Module ? T['meta']['id'] : never
export type DataOf<T> = T extends Module ? T['data'] : never

export type ModuleMapping<T extends Module[]> = {
  [K in keyof T as NameOf<T[K]>]: T[Exclude<K, number>]
}

export type StateMapping<T extends Module[], M = ModuleMapping<T>> = {
  [K in keyof M]: DataOf<M[K]>
}

export type ModuleC = Constructor<Module>

export interface IRegistry<T extends Module[]> {
  modules: T
  bus: EventBus

  get data(): StateMapping<T>
  of<M extends ModuleC>(Module: M): InstanceType<M> | null
}
