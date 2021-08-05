import {IExtension} from '@eventkit/core'
import {Client} from '@notionhq/client'

import type {User} from '@notionhq/client/build/src/api-types'

export type NotionUser = User

interface IOptions {
  token?: string
}

export interface INotionContext {
  client: Client
  getUsers(): Promise<User[]>
}

const createContext = (notionToken?: string): INotionContext => ({
  client: new Client({auth: notionToken ?? process.env['NOTION_TOKEN']}),

  async getUsers() {
    const query = await this.client.users.list()

    return query.results
  },
})

export function Notion(
  options: IOptions = {},
  ctx = createContext(options.token)
): IExtension {
  return {
    id: 'com.heypoom.notion-template',
    title: 'Notion Template',
    on: {
      async setup() {
        const users = await ctx.getUsers()

        console.log(users)
      },
    },
  }
}
