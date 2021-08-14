import {createStore, Store} from '@eventkit/core'

import {EventBus} from './EventBus'
import {IModuleMeta, Meta} from './ModuleMeta'

import {IRegistry} from '../../@types/registry/IRegistry'

export abstract class Module<E = Record<any, any>, S = any> {
  abstract meta: IModuleMeta<any>

  data: S = {} as S
  context = {}

  bus: EventBus | null = null
  registry: IRegistry<any> | null = null

  onSetup?(): void | Promise<void>

  static Meta = Meta

  store: Store<this['data'], E> = createStore({
    get: () => this.data,
    set: (s) => (this.data = s),
  })
}
