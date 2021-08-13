import {EventBus} from './EventBus'
import {ModuleMeta, meta} from './ModuleMeta'

import {IRegistry} from '../../@types/registry/IRegistry'

export abstract class Module<T extends string = any> {
  abstract meta: ModuleMeta<T>

  data = {}
  context = {}

  bus: EventBus | null = null
  registry: IRegistry<any> | null = null

  async onSetup(): Promise<void> {}

  static Meta = meta
}
