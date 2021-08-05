import {IExtension} from '@eventkit/core'
import {Client} from '@notionhq/client'

interface IOptions {
  token?: string
}

interface IContext {
  client: Client
  getUsers(): Promise<string[]>
}

const createContext = (notionToken?: string): IContext => ({
  client: new Client({auth: notionToken ?? process.env['NOTION_TOKEN']}),

  async getUsers() {
    const query = await this.client.users.list()

    return query.results.map((u) => u.name ?? u.id)
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
        users //?
      },
    },
  }
}
