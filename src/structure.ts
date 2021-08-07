import {PrefixEvents} from './@types/utils/PrefixEvents'

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

// const store = createStore<IAgenda, IAction>({slots: []})
// store.on('@run', (state, data) => {
//   data //?
// })

// store.on('agenda/add', (state, slot) => ({slots: [...state.slots, slot]}))
// store.run('agenda/add', {title: 'OK', time: timeslot('19:00', '19:10')})

// store.state //?

// interface Module<State, Events extends IMap> {
//   state: State
//   on: HandlerMap<State, Events>
// }

// const module: Module<IAgenda, IAction> = {
//   state: {slots: []},
//   on: {
//     'agenda/add': (state, data) => state,
//   },
// }

interface BookEvents {
  borrow: number
  return: string
  donate: boolean
}

interface UserEvents {
  login: '42'
}

interface IRootEvents {
  book: BookEvents
  user: UserEvents
}

const flattened: PrefixEvents<IRootEvents> = {
  'book/borrow': 50,
  'book/donate': true,
  'book/return': 'hhhhhhhh',
  'user/login': '42',
}
