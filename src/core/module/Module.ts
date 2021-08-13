import {EventBus} from './EventBus'
import {ModuleMeta, meta} from './ModuleMeta'
import {DynamicRegistry} from './DynamicRegistry'

export abstract class Module<T extends string = any> {
  abstract meta: ModuleMeta<T>

  data = {}
  context = {}

  bus: EventBus | null = null
  registry: DynamicRegistry | null = null

  async onSetup(): Promise<void> {}

  static Meta = meta
}
