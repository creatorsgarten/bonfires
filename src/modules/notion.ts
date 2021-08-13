import {Module, EventStatus} from '@eventkit/core'

import {Agenda} from './agenda'

export class Notion extends Module {
  meta = Module.Meta('eventkit/notion', {title: 'Notion Integration'})

  context = {token: 'default-notion-token'}

  async onSetup() {
    this.bus?.on(EventStatus.Live, () => {
      this.context.token = this.registry?.get(Agenda).data.slots[0] ?? ''
    })
  }
}
