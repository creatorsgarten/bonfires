import {EventBus} from './EventBus'
import {IModuleMeta, Meta} from './ModuleMeta'

import {IRegistry} from '../../@types/registry/IRegistry'

export abstract class Module<D = any> {
  abstract meta: IModuleMeta<any>

  data: D = {} as D
  context = {}

  bus: EventBus | null = null
  registry: IRegistry<any> | null = null

  async onSetup(): Promise<void> {}

  static Meta = Meta
}
