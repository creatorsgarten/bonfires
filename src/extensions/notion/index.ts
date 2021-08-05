import {Extension, IExtensionMeta} from '@eventkit/core'

import {createNotionContext, INotionContext} from './context'

interface IOptions {
  token?: string
}

const manifest: IExtensionMeta = {
  id: 'com.heypoom.notion',
  title: 'Notion Integration',
}

export class NotionExtension extends Extension {
  ctx: INotionContext

  constructor(options: IOptions = {}) {
    super(manifest)
    this.ctx = createNotionContext(options.token)

    this.on('setup', this.onSetup)
  }

  async onSetup() {
    const users = await this.ctx.getUsers()
    console.log(users)
  }
}
