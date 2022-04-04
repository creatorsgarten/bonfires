import { SetMetadata } from '@nestjs/common'

import { PolicyHandler } from './guard.types'

export const CHECK_ACCESS_KEY = 'check_access'

export const Access = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_ACCESS_KEY, handlers)
