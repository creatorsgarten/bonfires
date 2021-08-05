import {Event, EventStatus} from '@eventkit/core'

import {CongratulateExtension} from '@eventkit/extensions'

require('dotenv').config()

const event = new Event({
  title: 'GraphQL Meetup 10.0',
  type: 'meetup',
  when: ['19 August', '20 August'],
})

event.use(new CongratulateExtension())
event.publish()
event.setStatus(EventStatus.Live)
event.setStatus(EventStatus.Archived)
