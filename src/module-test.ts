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
  time: string
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

type R = {
  [K in keyof MT]: K extends string
    ? MT[K] extends MT[number]
      ? MT[K]
      : never
    : never
}

type RR = ConditionalExcept<R, never>

type RRR = {
  [K in keyof RR as RR[K]['id']]: RR[K]
}

type RState = {
  [K in keyof RRR]: RRR[K] extends IModule<infer S, infer E, infer ID>
    ? S
    : never
}

type REvents = PrefixEvents<
  {
    [K in keyof RRR]: RRR[K] extends IModule<infer S, infer E, infer ID>
      ? E
      : never
  }
>

const rootState: RState = {
  notion: {
    token: '',
  },
  agenda: {
    time: '',
  },
}

const rootEvents: REvents = {
  'agenda/add': 1024,
  'notion/createPage': '42',
}

type K = MT[0]

type ModuleParse = {
  [I in keyof MT]: MT['1']
}
