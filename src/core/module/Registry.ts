import {DuplicateModuleError} from '@eventkit/core'

import {Module} from './Module'
import {EventBus} from './EventBus'

import {
  ModuleC,
  IRegistry,
  StateMapping,
  ModuleMapping,
} from '../../@types/registry/IRegistry'

export class Registry<T extends Module[]> implements IRegistry<T> {
  modules: T
  bus = new EventBus()

  constructor(...modules: T) {
    this.modules = modules
    this.setupModules()
  }

  static create<K extends Module[]>(...modules: K) {
    return new Registry(...modules)
  }

  private async setupModules() {
    for (const module of this.modules) {
      module.registry = this
      module.bus = this.bus

      await module.onSetup?.()
    }
  }

  private checkDuplicates<K extends Module[]>(...modules: K) {
    for (const m of modules) {
      if (this.get(m.meta.id)) throw new DuplicateModuleError(m)
    }
  }

  with<K extends Module[]>(...modules: K) {
    this.checkDuplicates(...modules)

    const combinedModules: [...T, ...K] = [...this.modules, ...modules]

    return new Registry(...combinedModules)
  }

  use<K extends ModuleC>(Module: K, ...args: ConstructorParameters<K>) {
    const moduleInstance = new Module(...args) as InstanceType<K>

    return this.with(moduleInstance)
  }

  get<K extends keyof ModuleMapping<T>>(id: K) {
    return this.modules.find((m) => m.meta.id === id) as ModuleMapping<T>[K]
  }

  of<M extends ModuleC>(Module: M) {
    const instance = this.modules.find((m) => m instanceof Module) ?? null

    return instance as InstanceType<M> | null
  }

  get data() {
    return Object.fromEntries(
      this.modules.map((m) => [m.meta.id, m.data])
    ) as StateMapping<T>
  }
}

export const createRegistry = <K extends Module[]>(...modules: K) =>
  Registry.create(...modules)
