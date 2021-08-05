import {CustomError} from 'ts-custom-error'

import {IExtension} from '@eventkit/core'

export class DuplicateExtensionError extends CustomError {
  constructor(extension: IExtension) {
    const message = `Extension "${extension.title}" (${extension.id}) is already loaded.`

    super(message)
  }
}
