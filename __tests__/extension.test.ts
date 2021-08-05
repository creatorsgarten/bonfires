import {DuplicateExtensionError, Event} from '@eventkit/core'
import {Notion} from '@eventkit/extensions'

describe('Extension Manager', () => {
  it('should throw an error on duplicate extension', async () => {
    const event = new Event({
      title: 'GraphQL Meetup 10.0',
      type: 'meetup',
      when: new Date(),
    })

    event.use(Notion())

    const promise = event.use(Notion())
    await expect(promise).rejects.toBeInstanceOf(DuplicateExtensionError)
  })
})
