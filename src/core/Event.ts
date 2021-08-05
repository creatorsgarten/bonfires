import {v4} from 'uuid'
import {IExtension} from '@eventkit/core'

import {ExtensionManager} from './ExtensionManager'

import {parseNaturalDate} from '../utils/natural-date'
import {IEvent, EventStatus, ICreateEventInput} from '../@types/IEvent'

export class Event {
  data: IEvent
  extension = new ExtensionManager(this)

  constructor(input: ICreateEventInput) {
    this.data = {
      ...input,
      id: v4(),
      status: EventStatus.Draft,
      when: parseNaturalDate(input.when),
    }
  }

  async use(extension: IExtension) {
    await this.extension.use(extension)
  }
}
