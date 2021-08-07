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
