import {Agenda, Notion} from '@eventkit/modules'

import {Module} from './Module'

type Name<T> = T extends Module ? T['meta']['id'] : never

type ModuleMapping<T extends Module[]> = {
  [K in keyof T as Name<T[K]>]: T[Exclude<K, number>]
}

type StateMapping<T extends Module[], M = ModuleMapping<T>> = {
  [K in keyof M]: M[K] extends Module ? M[K]['data'] : never
}

class BaseRegistry<T extends Module[]> {
  modules: T

  constructor(...modules: T) {
    this.modules = modules
  }

  get<K extends keyof ModuleMapping<T>>(id: K) {
    return this.modules.find((m) => m.meta.id === id) as ModuleMapping<T>[K]
  }

  get state() {
    return {} as StateMapping<T>
  }
}

const reg = new BaseRegistry(new Agenda(), new Notion())

const notion = reg.get('eventkit/notion')
notion.context.token

reg.state['eventkit/notion']

const agenda = reg.get('eventkit/agenda')
agenda.data.slots

const state = reg.state['eventkit/agenda']
state.slots
