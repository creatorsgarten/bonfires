import {Registry} from '@eventkit/core'
import {Notion} from '@eventkit/modules'

import {mockNotionContext} from './fixtures/notion-context'

describe('Notion', () => {
  it('can get list of users', async () => {
    const r = Registry.create().use(Notion, mockNotionContext)
    const notion = r.get('eventkit/notion')

    const users = await notion.users()

    expect(users).toHaveLength(2)
    expect(users[0]?.name).toBe('Phoomparin Mano')
    expect(users[1]?.name).toBe('EventKit')
  })
})
