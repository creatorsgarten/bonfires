import {v4} from 'uuid'
import {id, meta, Extension, IExtensionMeta} from '@eventkit/core'

interface ISession {
  id: string
  title: string
  start: Date
  end: Date
}

interface IState {
  sessions: ISession[]
}

export class ScheduleExtension extends Extension {
  id = id('schedule')
  meta = meta({title: 'Schedule Planner'})

  data: IState = {sessions: []}

  add(session: Omit<ISession, 'id'>) {
    this.data.sessions.push({...session, id: v4()})
  }
}
