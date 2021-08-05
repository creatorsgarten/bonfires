import {Client} from '@notionhq/client'
import type {User} from '@notionhq/client/build/src/api-types'

export type NotionUser = User

export interface INotionContext {
  client: Client
  getUsers(): Promise<User[]>
}

export const createNotionContext = (notionToken?: string): INotionContext => ({
  client: new Client({auth: notionToken ?? process.env['NOTION_TOKEN']}),

  async getUsers() {
    const query = await this.client.users.list()

    return query.results
  },
})
