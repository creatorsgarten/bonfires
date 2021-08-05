import {CustomError} from 'ts-custom-error'

import {Extension} from '@eventkit/core'

export class DuplicateExtensionError extends CustomError {
  constructor(extension: Extension) {
    const {title, id} = extension.meta
    const message = `Extension "${title}" (${id}) is already loaded.`

    super(message)
  }
}
