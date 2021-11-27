import {Module, EventStatus} from '@eventkit/core'
import {Agenda} from '@eventkit/modules'

export class MockModule extends Module {
  meta = Module.Meta('eventkit/mock', {title: 'Mock Module'})

  data = {
    summary: {firstTalk: 'N/A'},
  }

  async onSetup() {
    this.bus?.on(EventStatus.Live, () => {
      const agenda = this.registry?.of(Agenda)!

      this.data.summary.firstTalk = agenda.data.slots[0]?.title!
    })
  }
}
