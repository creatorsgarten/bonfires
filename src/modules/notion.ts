import {IModule, ModuleFn} from '@eventkit/core'

import {IEventModule} from './event'

interface INotionState {
  token: string
}

interface INotionEvents {
  createPage: '42'
}

interface IAgendaState {
  time: Date
}
interface IAgendaEvents {
  add: number
}

type IAgendaModule = IModule<IAgendaState, IAgendaEvents, 'agenda'>
type INotionModule = IModule<INotionState, INotionEvents, 'notion'>

export const NotionModule: ModuleFn<
  [IEventModule, IAgendaModule, INotionModule]
> = (store) => {
  const {on} = store

  on('event/live', (state) => state)
  on('agenda/add', (state) => state)
  on('notion/createPage', (state) => state)
}
