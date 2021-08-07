import {DuplicateExtensionError} from '@eventkit/core'

import {mockEvent, mockNotionPlugin} from './__mocks__'

describe('Extension Manager', () => {
  it('should throw an error on duplicate extension', async () => {
    const event = mockEvent()
    event.use(mockNotionPlugin())

    const promise = event.use(mockNotionPlugin())
    await expect(promise).rejects.toBeInstanceOf(DuplicateExtensionError)
  })
})
