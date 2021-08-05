import {EventStatus} from '@eventkit/core'

import {mockEvent, mockNotionPlugin} from './__mocks__'

describe('Event', () => {
  it('should be able to publish the event', () => {
    const event = mockEvent()
    event.use(mockNotionPlugin())

    expect(event.data.status).toBe(EventStatus.Draft)

    event.publish()
    expect(event.data.status).toBe(EventStatus.Published)
  })
})
