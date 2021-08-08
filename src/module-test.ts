import {createModule} from '.'
import {IModule} from './@types'
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

const NotionModule = createModule<INotionState, INotionEvents>()('notion', {
  setup(store) {
    store.state.token

    store.on('createPage', (state) => {
      return {token: 'hello'}
    })
  },
})

const AgendaModule = createModule<IAgendaState, IAgendaEvents>()('agenda')

type EventKitBase<E, S> = {}

function event<M extends IModule<any, any, any>[]>(...modules: M): M {
  return modules
}

const ev = event(NotionModule, AgendaModule)

type MT = [
  IModule<INotionState, INotionEvents, 'notion'>,
  IModule<IAgendaState, IAgendaEvents, 'agenda'>
]

type ModuleTuple = MT[number] extends IModule<infer S, infer E, infer ID>
  ? [S, E, ID]
  : never

function combineModules<M extends any[]>(...modules: M): CombineModule<M> {
  return modules as any
}

const cz = combineModules(NotionModule, AgendaModule)
type Rz = typeof cz

type KKK = CombineModule<MT>

type RState = StateOf<KKK>
type REvents = EventsOf<KKK>
type RModule = RootModuleOf<CombineModule<MT>>

const rootState: RState = {
  notion: {
    token: 'xoxb-notion-token-hello',
  },
  agenda: {
    time: new Date(),
  },
}

const rootEvents: REvents = {
  'agenda/add': 1024,
  'notion/createPage': '42',
}

const rootModule: RModule = {state: rootState, events: rootEvents}

type K = MT[0]

type ModuleParse = {
  [I in keyof MT]: MT['1']
}
