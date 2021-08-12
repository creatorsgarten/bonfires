import {Extension, id, IExtensionMeta, meta} from '@eventkit/core'

import {createNotionContext, INotionContext} from './context'

interface IOptions {
  token?: string
}

export class NotionExtension extends Extension {
  id = id('notion')
  meta = meta({title: 'Notion Integration'})

  ctx: INotionContext

  constructor(options: IOptions = {}) {
    super()
    this.ctx = createNotionContext(options.token)
    this.on('setup', this.onSetup)
  }

  async onSetup() {
    const users = await this.ctx.getUsers()
    console.log(users)
  }
}
