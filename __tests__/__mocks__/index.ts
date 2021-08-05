import {Event} from '@eventkit/core'
import {Notion} from '@eventkit/extensions'

import {Client} from '@notionhq/client'

export const mockEvent = () =>
  new Event({
    title: 'GraphQL Meetup 10.0',
    type: 'meetup',
    when: ['19 August', '20 August'],
    online: true,
  })

export const mockNotionPlugin = () =>
  Notion({}, {client: new Client(), getUsers: async () => ['Poom', 'Tim']})
