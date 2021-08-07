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

interface IEvent {
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

const event2: IEvent = {
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

type RunPair<E, T extends keyof E> = [T, E[T]]

interface SysEvents {
  '@init': any
  '@run': any
  '@changed': []
}

type IMap = Record<string, any>
type MaybeAsync<T> = T | Promise<T>
type Reducer<S, P> = (state: S, data: P) => MaybeAsync<S | void>

interface Store<S, E, EE = E & SysEvents> {
  readonly state: S

  get: () => S
  set: (state: S) => void

  run: <T extends keyof EE>(event: T, data: EE[T]) => void
  on: <T extends keyof EE>(event: T, handler: Reducer<S, EE[T]>) => void
}

export const createStore = <S, E extends IMap>(initialState: S) => {
  type Events = E & SysEvents
  type A = keyof Events

  type EventMap = {[E in A]?: Handler<E>[]}
  type Handler<E extends A> = Reducer<S, Events[E]>

  let state = initialState
  let events: EventMap = {}

  const store: Store<S, E> = {
    set(nextState) {
      state = nextState
    },

    on(event, handler) {
      const handlers = events[event] ?? []

      events = {...events, [event]: [...handlers, handler]}
    },

    async run(event, data) {
      const handlers = events[event] ?? []
      if (handlers.length === 0) return

      for (const handler of handlers) {
        const nextState = await handler(state, data)
        if (nextState === undefined) return

        state = nextState
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

store.state //?
