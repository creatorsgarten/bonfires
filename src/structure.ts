// Data-Driven
interface IDateRange {
  start: Date | string
  end: Date | string
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

const daterange = (start: string, end: string): IDateRange => ({
  start: datetime(start),
  end: datetime(end),
})

const timeslot = (start: string, end: string): IDateRange => ({
  start: time(start),
  end: time(end),
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
