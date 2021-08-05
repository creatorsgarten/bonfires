import {createExtension, EventStatus} from '@eventkit/core'

import {mockEvent} from './__mocks__'

describe('createExtension Utility', () => {
  it('should change the event status', () => {
    const event = mockEvent()

    const PublishExtension = createExtension({
      title: 'Auto Publish',
      id: 'com.heypoom.autopublish',
      on: {setup: (event) => event.publish()},
    })

    event.use(new PublishExtension())
    expect(event.data.status).toBe(EventStatus.Published)
  })
})
