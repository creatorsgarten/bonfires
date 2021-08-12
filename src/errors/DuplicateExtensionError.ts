import {CustomError} from 'ts-custom-error'

import {Module} from '@eventkit/core'

export class DuplicateModuleError extends CustomError {
  constructor(module: Module) {
    const {id, title} = module.meta
    const message = `Module "${title}" (${id}) is already loaded.`

    super(message)
  }
}
