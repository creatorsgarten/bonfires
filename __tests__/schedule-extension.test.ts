import {Extension} from '@eventkit/core'
import {NotionExtension, ScheduleExtension} from '@eventkit/extensions'
import {TupleType} from 'typescript'

import {mockEvent} from './__mocks__'

describe('Scheduler Extension', () => {
  it('should throw an error on duplicate extension', async () => {
    const event = mockEvent()

    event.use(new ScheduleExtension())

    const schedule = event.extension.get(ScheduleExtension)!

    schedule.id
    schedule.add({title: 'Opening', start: new Date(), end: new Date()})
    schedule.data.sessions //?
  })
})
