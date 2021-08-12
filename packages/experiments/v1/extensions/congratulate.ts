import {Extension, EventStatus, meta, id} from '@eventkit/core'

export class CongratulateExtension extends Extension {
  id = id('congratulate')

  meta = meta({
    title: 'Congratulations!',
  })

  constructor() {
    super()

    this.on(EventStatus.Published, () => {
      console.log('Event is now PUBLISHED! Event day is coming soon!')
    })

    this.on(EventStatus.Live, () => {
      console.log('Event is now LIVE! TIME TO ROLL!!!!')
    })

    this.on(EventStatus.Archived, () => {
      console.log('Event is now archived. Thank you for making this happen!')
    })
  }
}
