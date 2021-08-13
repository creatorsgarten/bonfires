import {Constructor, UnionToIntersection} from 'type-fest'

import {Agenda, Notion} from '@eventkit/modules'
import {Module} from './Module'

export type ReturnTypeOf<T extends Module | Module[]> = T extends Module
  ? T
  : T extends Module[]
  ? Exclude<T[number], void>
  : never

class BaseRegistry {
  static modules: Module[] = []

  static module<
    S extends Constructor<any> & {modules: any[]},
    T extends Module[]
  >(this: S, ...nextModules: T) {
    const currentModules = this.modules

    type K = T

    class Registry extends this {
      static modules = [...currentModules, ...nextModules] as K
    }

    return Registry
  }

  get() {}
}

const Reg = BaseRegistry.module(new Notion(), new Agenda())
Reg.modules

const m0 = Reg.modules[0].meta.id
const m1 = Reg.modules[1].meta.id
