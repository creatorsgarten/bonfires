import {EventStatus} from '@eventkit/core'

interface EventState {
  status: EventStatus
}

interface EventEvents {
  [EventStatus.Draft]: string
  [EventStatus.Live]: string
}

const EventModule = {
  name: 'event',

  setup(store) {
    store.on('event/live', (state) => {
      // ?
    })
  },
}
