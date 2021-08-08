import {createModule} from '.'
import {IModule, IStore} from './@types'
import {CombineModule, StateOf, EventsOf, RootModuleOf} from './@types/IModule'

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

const NotionModuleX = createModule<INotionState, INotionEvents>()('notion')

const AgendaModuleX = createModule<IAgendaState, IAgendaEvents>()('agenda', {
  uses: [NotionModuleX] as const,
})

type CombinedStoreOf<
  M extends IModule<any, any, any>[],
  C = CombineModule<M>,
  S = StateOf<C>,
  E = EventsOf<C>
> = IStore<S, E>

type CombinedModuleFn<M extends IModule<any, any, any>[]> = (
  store: CombinedStoreOf<M>
) => void

type MZ = [IAgendaModule, INotionModule]
type CMM = CombineModule<MZ>

const combinedModule: CombinedModuleFn<MZ> = (store) => {
  store.state.agenda.time
  store.state.notion.token

  store.on('agenda/add', (state) => state)
  store.on('notion/createPage', (state) => state)
}

// type ResultType = typeof AgendaModuleX

// type EventKitBase<E, S> = {}

// function event<M extends IModule<any, any, any, any>[]>(...modules: M): M {
//   return modules
// }

// const ev = event(NotionModule, AgendaModule)

type MT = [
  IModule<INotionState, INotionEvents, 'notion'>,
  IModule<IAgendaState, IAgendaEvents, 'agenda'>
]

type Combined2 = CombineModule<MT>

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
