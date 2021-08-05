import {Event} from '@eventkit/core'
import {NotionExtension} from '@eventkit/extensions'

require('dotenv').config()

const event = new Event({
  title: 'GraphQL Meetup 10.0',
  type: 'meetup',
  when: ['19 August', '20 August'],
  online: true,
})

event.use(new NotionExtension())
