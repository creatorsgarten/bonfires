import {Module} from '@eventkit/core'

export class Agenda extends Module {
  meta = Module.Meta('eventkit/agenda', {title: 'Agenda Manager'})

  data = {slots: ['Talk 1']}
}
