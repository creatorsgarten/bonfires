import {IExtension} from '@eventkit/core'

import {createNotionContext} from './context'

interface IOptions {
  token?: string
}

export function Notion(
  options: IOptions = {},
  ctx = createNotionContext(options.token)
): IExtension {
  return {
    id: 'com.heypoom.notion',
    title: 'Notion Template',
    on: {
      async setup() {
        const users = await ctx.getUsers()
        console.log(users)
      },
    },
  }
}
