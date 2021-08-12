import {createExtension, EventStatus} from '@eventkit/core'

import {mockEvent} from './__mocks__'

describe('createExtension Utility', () => {
  it('should change the event status', () => {
    const event = mockEvent()

    const PublishExtension = createExtension({
      id: 'test.autopublish',
      title: 'Auto Publish',
      on: {setup: (event) => event.publish()},
    })

    event.use(new PublishExtension())
    expect(event.data.status).toBe(EventStatus.Published)
  })
})
