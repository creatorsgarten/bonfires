import {Registry, RegistryOf, ModuleC} from '@eventkit/core'

import {createEvent} from '../../utils/createEvent'

import {CreateEventInput, IEvent} from '../../@types/event/IEvent'

export class Event<R extends Registry<any>> {
  data: IEvent
  module: R

  constructor(data: CreateEventInput, registry: R) {
    this.data = createEvent(data)
    this.module = registry
  }

  static create(data: CreateEventInput) {
    const r = Registry.create()

    return new Event(data, r)
  }

  use<K extends ModuleC>(Module: K, ...args: ConstructorParameters<K>) {
    const r = this.module.use(Module, ...args) as RegistryOf<R, K>

    return new Event(this.data, r)
  }
}
