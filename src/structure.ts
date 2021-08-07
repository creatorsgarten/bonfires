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

type MaybeAsync<T> = T | Promise<T>

type IReducer<S, P> = (state: S, payload: P) => MaybeAsync<S | void>

class Store<S, EV extends Record<string, any>, E = SysEvents & EV> {
  state: S
  events: {[T in keyof E]?: IReducer<S, E[T]>[]} = {}

  constructor(initialState: S) {
    this.state = initialState
  }

  get = () => this.state

  set(state: S) {
    this.state = state
  }

  on<T extends keyof E>(type: T, event: IReducer<S, E[T]>) {
    const events = this.events[type] ?? []

    this.events = {...this.events, [type]: [...events, event]}
  }

  async run<T extends keyof E>(type: T, payload: E[T]) {
    const events = this.events[type] ?? []
    if (events.length === 0) return

    for (const event of events) {
      const state = await event(this.state, payload)
      if (state === undefined) return

      this.state = state
    }
  }
}

const createStore = <State, Events>(initialState: State) =>
  new Store<State, Events>(initialState)

const store = createStore<IAgenda, IAction>({slots: []})

store.on('agenda/add', (state, slot) => ({slots: [...state.slots, slot]}))
store.on('agenda/remove', async (state, id) => {
  store.set(state)

  return
})

store.state //?

store.run('agenda/add', {
  title: 'Speaker 2',
  time: timeslot('19:50', '20:00'),
})

store.run('@init', undefined)

store.state //?
