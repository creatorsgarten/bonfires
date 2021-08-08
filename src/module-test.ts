import {CombinedModuleFn, IModule} from './@types'
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

type IAgendaFn = CombinedModuleFn<[IAgendaModule, INotionModule]>

const combinedModule: IAgendaFn = (store) => {
  store.state.agenda.time
  store.state.notion.token

  store.on('agenda/add', (state) => state)
  store.on('notion/createPage', (state) => state)
}

// function event<M extends IModule<any, any, any, any>[]>(...modules: M): M {
//   return modules
// }

// const ev = event(NotionModule, AgendaModule)

// type ModuleTuple = MT[number] extends IModule<infer S, infer E, infer ID>
//   ? [S, E, ID]
//   : never

// function combineModules<M extends any[]>(...modules: M): CombineModule<M> {
//   return modules as any
// }

// const cz = combineModules(NotionModule, AgendaModule)
// type Rz = typeof cz

// type RState = StateOf<KKK>
// type REvents = EventsOf<KKK>
// type RModule = RootModuleOf<CombineModule<MT>>

// const rootState: RState = {
//   notion: {
//     token: 'xoxb-notion-token-hello',
//   },
//   agenda: {
//     time: new Date(),
//   },
// }

// const rootEvents: REvents = {
//   'agenda/add': 1024,
//   'notion/createPage': '42',
// }

// const rootModule: RModule = {state: rootState, events: rootEvents}

// type K = MT[0]

// type ModuleParse = {
//   [I in keyof MT]: MT['1']
// }
