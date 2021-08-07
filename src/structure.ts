// Data-Driven
interface IDateRange {
  from: Date | string
  to: Date | string
}

interface IEventDetail {
  title: string
  location: string
  datetime: IDateRange
}

interface IAgendaSlot {
  id?: string
  title: string
  time: IDateRange
  location?: string
  people?: string | string[]
}

interface IAgenda {
  slots: IAgendaSlot[]
}

// Root State
interface IEventState {
  detail: IEventDetail
  agenda: IAgenda
}

const datetime = (datestr: string) => new Date(datestr)
const time = (timestr: string) => new Date(timestr)

const daterange = (from: string, to: string): IDateRange => ({
  from: datetime(from),
  to: datetime(to),
})

const timeslot = (from: string, to: string): IDateRange => ({
  from: time(from),
  to: time(to),
})

const event2: IEventState = {
  detail: {
    title: 'GraphQL Meetup 10.0',
    location: 'San Francisco, CA',

    datetime: daterange('19/08/2021 19:00', '20/08/2021 22:00'),
  },

  agenda: {
    slots: [
      {
        title: 'Opening Talk',
        time: timeslot('19:00', '19:10'),
      },

      {
        title: 'Speaker 1',
        time: timeslot('19:10', '19:50'),
        people: 'Poom (@heypoom)',
      },
    ],
  },
}

interface IAction {
  'agenda/add': IAgendaSlot
  'agenda/remove': string
}

interface SysEvents {
  '@init': any
  '@run': any
  '@changed': []
}

type IMap = Record<string, any>
type MaybeAsync<T> = T | Promise<T>
type Reducer<S, P> = (state: S, data: P) => MaybeAsync<S | void>

type HandlerMap<S, E, E2 = E & SysEvents> = {
  [T in keyof E2]?: Reducer<S, E2[T]>
}

type HandlersMap<S, E, E2 = E & SysEvents> = {
  [T in keyof E2]?: Reducer<S, E2[T]>[]
}

type OnFn<S, E> = <T extends keyof E>(
  event: T,
  handler: Reducer<S, E[T]>
) => void

type RunFn<E> = <T extends keyof E>(event: T, data: E[T]) => void

interface Store<S, E, E2 = E & SysEvents> {
  readonly state: S

  get: () => S
  set: (state: S) => void

  run: RunFn<E2>
  on: OnFn<S, E2>
}

const isPromise = <T>(data: MaybeAsync<T>): data is Promise<T> =>
  data && 'then' in data && typeof data.then === 'function'

export const createStore = <S, E extends IMap>(initialState: S) => {
  let state = initialState
  let events: HandlersMap<S, E> = {}

  const store: Store<S, E> = {
    set(nextState) {
      state = nextState
    },

    on(event, handler) {
      const handlers = events[event] ?? []

      events = {...events, [event]: [...handlers, handler]}
    },

    run(event, data) {
      const handlers = events[event] ?? []
      if (handlers.length === 0) return

      for (const handler of handlers) {
        const nextState = handler(state, data)
        if (nextState === undefined) continue
        if (isPromise(nextState)) continue

        store.set(nextState)
      }

      if (event !== '@run') {
        store.run('@run', [event, data])
      }
    },

    get: () => state,

    get state() {
      return state
    },
  }

  return store
}

const store = createStore<IAgenda, IAction>({slots: []})
store.on('@run', (state, data) => {
  data //?
})

store.on('agenda/add', (state, slot) => ({slots: [...state.slots, slot]}))
store.run('agenda/add', {title: 'OK', time: timeslot('19:00', '19:10')})

store.state //?

interface Module<State, Events extends IMap> {
  state: State
  on: HandlerMap<State, Events>
}

const module: Module<IAgenda, IAction> = {
  state: {slots: []},
  on: {
    'agenda/add': (state, data) => state,
  },
}

interface BookEvents {
  borrow: string
  return: string
  donate: string
}

interface UserEvents {
  login: string
}

interface IRootEvents {
  book: BookEvents
  user: UserEvents
}

type PrefixWithKey<T, K extends string> = {
  [P in keyof T as `${K}/${P extends string ? P : never}`]: T[P]
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

type Result = {[K in keyof IRootEvents]: PrefixWithKey<IRootEvents[K], K>}
type Result2 = UnionToIntersection<Result[keyof Result]>

const flattened: Result2 = {
  'book/borrow': '',
  'book/donate': '',
  'book/return': '',
  'user/login': '',
}
