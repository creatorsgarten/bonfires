import {Client} from '@notionhq/client'
import {User} from '@notionhq/client/build/src/api-types'

import {Module, EventStatus} from '@eventkit/core'

import {Agenda} from './agenda'

interface INotionContext {
  client: Client
  listUsers(): Promise<User[]>
}

const createContext = (): INotionContext => {
  const client = new Client({auth: process.env['NOTION_TOKEN']})

  return {
    client,
    listUsers: () => client.users.list().then((u) => u.results),
  }
}

export class Notion extends Module {
  meta = Module.Meta('eventkit/notion', {title: 'Notion Integration'})

  context = createContext()

  async onSetup() {}
}
