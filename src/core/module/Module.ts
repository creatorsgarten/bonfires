import {EventBus} from './EventBus'
import {IModuleMeta, Meta} from './ModuleMeta'

import {IRegistry} from '../../@types/registry/IRegistry'

export abstract class Module {
  abstract meta: IModuleMeta<any>

  data = {}
  context = {}

  bus: EventBus | null = null
  registry: IRegistry<any> | null = null

  async onSetup(): Promise<void> {}

  static Meta = Meta
}
