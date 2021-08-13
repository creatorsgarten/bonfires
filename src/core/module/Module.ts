import {EventBus} from './EventBus'
import {IModuleMeta, Meta} from './ModuleMeta'

import {IRegistry} from '../../@types/registry/IRegistry'

export abstract class Module<T extends string = any> {
  abstract meta: IModuleMeta<T>

  data = {}
  context = {}

  bus: EventBus | null = null
  registry: IRegistry<any> | null = null

  async onSetup(): Promise<void> {}

  static Meta = Meta
}
