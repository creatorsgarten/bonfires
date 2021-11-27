import {User} from '@notionhq/client/build/src/api-types'

import {INotionContext} from '../../src/modules/notion'

const users: User[] = [
  {
    id: '<uuid>',
    object: 'user',
    type: 'person',
    name: 'Phoomparin Mano',
    person: {email: 'poom@hey.com'},
  },
  {
    id: '<uuid>',
    object: 'user',
    type: 'bot',
    name: 'EventKit',
  },
]

export const mockNotionContext: INotionContext = {
  listUsers: async () => users,
}
