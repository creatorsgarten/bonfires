import {Agenda, Notion} from '@eventkit/modules'

import {Module} from './Module'

type Name<T> = T extends Module ? T['meta']['id'] : never

type ModuleMapping<T extends Module[]> = {
  [K in keyof T as Name<T[K]>]: T[Exclude<K, number>]
}

class BaseRegistry<T extends Module[]> {
  modules: T

  constructor(...modules: T) {
    this.modules = modules
  }

  get<K extends keyof ModuleMapping<T>>(id: K) {
    return this.modules.find((m) => m.meta.id === id) as ModuleMapping<T>[K]
  }
}

const reg = new BaseRegistry(new Agenda(), new Notion())

const agenda = reg.get('eventkit/agenda')
const notion = reg.get('eventkit/notion')
