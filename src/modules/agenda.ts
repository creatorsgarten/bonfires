import {Module} from '@eventkit/core'

interface ISlot {
  title: string
  start: Date
}

interface IAgenda {
  slots: ISlot[]
}

interface Events {
  'agenda/add': ISlot
}

export class Agenda extends Module<Events> {
  meta = Module.Meta('eventkit/agenda', {title: 'Agenda Manager'})

  data: IAgenda = {slots: []}

  async onSetup() {
    this.store.on('agenda/add', (s, e) => ({...s, slots: [...s.slots, e]}))
  }
}
