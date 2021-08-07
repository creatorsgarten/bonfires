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
}

type IMap = Record<string, any>
type MaybeAsync<T> = T | Promise<T>
type Reducer<S, P> = (state: S, payload: P) => MaybeAsync<S | void>

export const createStore = <S, EV extends IMap>(initialState: S) => {
  type E = SysEvents & EV
  type EventMap = {[T in keyof E]?: Reducer<S, E[T]>[]}
  type OnFn = <T extends keyof E>(type: T, event: Reducer<S, E[T]>) => void
  type RunFn = <T extends keyof E>(type: T, payload: E[T]) => void

  let state = initialState
  let eventMap: EventMap = {}

  function set(nextState: S) {
    state = nextState
  }

  const on: OnFn = (type, event) => {
    const events = eventMap[type] ?? []

    eventMap = {...eventMap, [type]: [...events, event]}
  }

  const run: RunFn = async (type, payload) => {
    const events = eventMap[type] ?? []
    if (events.length === 0) return

    for (const event of events) {
      const nextState = await event(state, payload)
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
