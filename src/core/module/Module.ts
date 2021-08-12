import {EventBus} from './EventBus'
import {ModuleMeta, meta} from './ModuleMeta'
import {ModuleRegistry} from './ModuleRegistry'

export abstract class Module {
  abstract meta: ModuleMeta

  data = {}
  context = {}

  bus: EventBus | null = null
  registry: ModuleRegistry | null = null

  async onSetup(): Promise<void> {}

  static meta = meta
}
