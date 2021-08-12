import {DuplicateModuleError, Module} from '@eventkit/core'

import {EventBus} from './EventBus'

type ModuleConstructor = {new (...args: any[]): Module}

export class ModuleRegistry {
  modules: Module[] = []
  bus = new EventBus()

  getById(id: string) {
    return this.modules.find((m) => m.meta.id === id) ?? null
  }

  register(module: Module) {
    if (this.getById(module.meta.id)) throw new DuplicateModuleError(module)

    module.registry = this
    module.bus = this.bus

    this.modules.push(module)
  }

  use<T extends ModuleConstructor>(
    module: T,
    ...args: ConstructorParameters<T>
  ) {
    this.register(new module(...args))
  }

  get<T extends typeof Module>(module: T) {
    return this.modules.find((m) => m instanceof module) as InstanceType<T>
  }

  has(module: typeof Module) {
    return this.modules.some((m) => m instanceof module)
  }

  ready() {
    for (const module of this.modules) {
      module.onSetup()
    }
  }
}
