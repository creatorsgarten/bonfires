import {Constructor} from 'type-fest'
import {DuplicateModuleError, Module} from '@eventkit/core'

import {EventBus} from './EventBus'

type ModuleA = Constructor<Module<any>>

export class ModuleRegistry {
  modules: Module[] = []
  bus = new EventBus()

  getById(id: string) {
    return this.modules.find((m) => m.meta.id === id) ?? null
  }

  register<T extends Module<any>>(module: T) {
    if (this.getById(module.meta.id)) throw new DuplicateModuleError(module)

    module.registry = this
    module.bus = this.bus

    this.modules.push(module)
  }

  use<T extends ModuleA>(module: T, ...args: ConstructorParameters<T>) {
    this.register(new module(...args))
  }

  get<T extends ModuleA>(module: T) {
    return this.modules.find((m) => m instanceof module) as InstanceType<T>
  }

  has<T extends ModuleA>(module: T) {
    return this.modules.some((m) => m instanceof module)
  }

  ready() {
    for (const module of this.modules) {
      module.onSetup()
    }
  }

  get data() {
    const data: Record<string, any> = {}

    this.modules.forEach((module) => {
      data[module.meta.id] = module.data
    })

    return data
  }
}
