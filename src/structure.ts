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

interface SysEvents {
  '@init': undefined
  '@run': []
  '@changed': []
}

type IMap = Record<string, any>
type MaybeAsync<T> = T | Promise<T>
type Reducer<S, P> = (state: S, data: P) => MaybeAsync<S | void>

export const createStore = <State, Event extends IMap>(initialState: State) => {
  type A = keyof Events
  type Events = SysEvents & Event

  type Handler<T extends A> = Reducer<State, Events[T]>
  type EventMap = {[T in A]?: Handler<T>[]}

  type OnFn = <T extends A>(type: T, handler: Handler<T>) => void
  type RunFn = <T extends A>(event: T, data: Events[T]) => void

  let state = initialState
  let events: EventMap = {}

  function set(nextState: State) {
    state = nextState
  }

  const on: OnFn = (event, handler) => {
    const handlers = events[event] ?? []

    events = {...events, [event]: [...handlers, handler]}
  }

  const run: RunFn = async (event, data) => {
    const handlers = events[event] ?? []
    if (handlers.length === 0) return

    for (const handler of handlers) {
      const nextState = await handler(state, data)
      if (nextState === undefined) return

      state = nextState
    }
  }

  return {
    on,
    run,

    set,
    get: () => state,

    get state() {
      return state
    },
  }
}

const store = createStore<IAgenda, IAction>({slots: []})

store.on('agenda/add', (state, slot) => ({slots: [...state.slots, slot]}))
store.on('agenda/remove', async (state, id) => {
  store.set(state)

  return
})

store.run('agenda/add', {
  title: 'Speaker 2',
  time: timeslot('19:50', '20:00'),
})

store.run('@init', undefined)

store.state //?
