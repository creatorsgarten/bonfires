import {Module} from '@eventkit/core'

interface ISlot {
  title: string
  start: Date
}

interface IAgenda {
  slots: ISlot[]
}

export class Agenda extends Module {
  meta = Module.Meta('eventkit/agenda', {title: 'Agenda Manager'})

  data: IAgenda = {slots: []}
}
