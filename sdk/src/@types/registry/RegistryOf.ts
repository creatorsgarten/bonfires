import {Registry} from '@eventkit/core'

import {ModuleC} from './IRegistry'

export type GetModules<R extends Registry<any>> = R extends Registry<infer M>
  ? M
  : never

export type RegistryOf<R extends Registry<any>, K extends ModuleC> = Registry<
  [...GetModules<R>, InstanceType<K>]
>
