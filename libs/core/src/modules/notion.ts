import { Client } from '@notionhq/client'
import { User } from '@notionhq/client/build/src/api-types'

import { Module } from '@eventkit/core'

export interface INotionContext {
  client?: Client
  listUsers(): Promise<User[]>
}

const createContext = (): INotionContext => {
  const client = new Client({ auth: process.env['NOTION_TOKEN'] })

  return {
    client,
    listUsers: () => client.users.list().then((u) => u.results),
  }
}

export class Notion extends Module {
  meta = Module.Meta('notion', { title: 'Notion Integration' })
  context: INotionContext

  constructor(context = createContext()) {
    super()
    this.context = context
  }

  async onSetup() {}

  async users() {
    return this.context.listUsers()
  }
}
