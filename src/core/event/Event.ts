import {Registry} from '@eventkit/core'

import type {RegistryOf, ModuleC} from '@eventkit/core'

export class Event<R extends Registry<any>> {
  registry: R

  constructor(registry: R) {
    this.registry = registry
  }

  static create() {
    const r = Registry.create()

    return new Event(r)
  }

  use<K extends ModuleC>(Module: K, ...args: ConstructorParameters<K>) {
    const r = this.registry.use(Module, ...args) as RegistryOf<R, K>

    return new Event(r)
  }
}
