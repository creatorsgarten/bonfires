import {Constructor} from 'type-fest'

import {DuplicateModuleError} from '@eventkit/core'
import {Agenda, Notion} from '@eventkit/modules'

import {Module} from './Module'

type NameOf<T> = T extends Module ? T['meta']['id'] : never
type DataOf<T> = T extends Module ? T['data'] : never

type ModuleMapping<T extends Module[]> = {
  [K in keyof T as NameOf<T[K]>]: T[Exclude<K, number>]
}

type StateMapping<T extends Module[], M = ModuleMapping<T>> = {
  [K in keyof M]: DataOf<M[K]>
}

type ModuleA = Constructor<Module<any>>

class BaseRegistry<T extends Module[]> {
  modules: T

  constructor(...modules: T) {
    this.modules = modules
  }

  private checkDuplicates<K extends Module[]>(...modules: K) {
    for (const m of modules) {
      if (this.get(m.meta.id)) throw new DuplicateModuleError(m)
    }
  }

  with<K extends Module[]>(...modules: K) {
    this.checkDuplicates(...modules)

    const combinedModules: [...T, ...K] = [...this.modules, ...modules]

    return new BaseRegistry(...combinedModules)
  }

  use<K extends ModuleA>(Module: K, ...args: ConstructorParameters<K>) {
    const moduleInstance = new Module(...args) as InstanceType<K>

    return this.with(moduleInstance)
  }

  get<K extends keyof ModuleMapping<T>>(id: K) {
    return this.modules.find((m) => m.meta.id === id) as ModuleMapping<T>[K]
  }

  get state() {
    return Object.fromEntries(
      this.modules.map((m) => [m.meta.id, m.data])
    ) as StateMapping<T>
  }
}

const regBase = new BaseRegistry()
regBase.state //?

const reg = regBase.use(Notion).use(Agenda)
reg.state //?

const notion = reg.get('eventkit/notion')
notion.context.token //?

const agenda = reg.get('eventkit/agenda')
agenda.data.slots.push({start: new Date(), title: 'Slot 2'})

const state = reg.state['eventkit/agenda']
state.slots //?
