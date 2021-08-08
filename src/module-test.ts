import {ConditionalExcept} from 'type-fest'
import {PrefixEvents} from './@types'

interface IModule<E, S, ID extends string> {
  id: ID
  initialState?: S
}

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

export const createModule =
  <E, S>() =>
  <ID extends string>(
    id: ID,
    options: {initialState?: S} = {}
  ): IModule<E, S, ID> => {
    return {id, initialState: options.initialState}
  }

const NotionModule = createModule<INotionState, INotionEvents>()('notion')
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

type NameOf<M> = M extends IModule<any, any, infer ID> ? ID : never

type CombineModule<
  MA extends any[],
  MD = {
    [K in keyof MA as NameOf<MA[K]>]: K extends string ? MA[K] : never
  }
> = MD

type RootModuleOf<M extends Record<any, IModule<any, any, any>>> = {
  state: StateOf<M>
  events: EventsOf<M>
}

function combineModules<M extends any[]>(...modules: M): CombineModule<M> {
  return modules as any
}

const cz = combineModules(NotionModule, AgendaModule)
type Rz = typeof cz

type KKK = CombineModule<MT>

type RState = StateOf<KKK>
type REvents = EventsOf<KKK>
type RModule = RootModuleOf<CombineModule<MT>>

type StateOf<RRR> = {
  [K in keyof RRR]: RRR[K] extends IModule<infer S, infer E, infer ID>
    ? S
    : never
}

type EventsOf<RRR> = PrefixEvents<
  {
    [K in keyof RRR]: RRR[K] extends IModule<infer S, infer E, infer ID>
      ? E
      : never
  }
>

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
