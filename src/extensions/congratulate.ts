import {Extension, IExtensionMeta, EventStatus} from '@eventkit/core'

const manifest: IExtensionMeta = {
  id: 'com.heypoom.congratulate',
  title: 'Congratulations!',
}

export class CongratulateExtension extends Extension {
  constructor() {
    super(manifest)

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
