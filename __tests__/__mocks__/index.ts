import {Client} from '@notionhq/client'

import {Event, IExtension} from '@eventkit/core'
import {INotionContext, Notion} from '@eventkit/extensions'

export const mockEvent = () =>
  new Event({
    title: 'GraphQL Meetup 10.0',
    type: 'meetup',
    when: ['19 August', '20 August'],
    online: true,
  })

export function mockNotionPlugin(): IExtension {
  const context: INotionContext = {
    client: new Client({baseUrl: 'mock'}),
    getUsers: async () => ['Poom', 'Tim'],
  }

  return Notion({}, context)
}
