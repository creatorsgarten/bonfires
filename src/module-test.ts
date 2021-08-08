import {createStore} from '.'
import {ModuleFn, IModule} from './@types'
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

type IAgendaFn = ModuleFn<[IAgendaModule, INotionModule]>

const combinedModule: IAgendaFn = (store) => {
  store.state.agenda.time
  store.state.notion.token

  store.on('agenda/add', (state) => state)
  store.on('notion/createPage', (state) => state)
}

const ss = createStore(combinedModule)
