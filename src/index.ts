export {Event, createEvent} from './core/Event'

export {Extension} from './core/Extension'
export {ExtensionManager} from './core/ExtensionManager'

export {createExtension} from './utils/create-extension'

export {DuplicateExtensionError} from './errors/DuplicateExtensionError'

export {EventStatus, IEvent, IEventType} from './@types/IEvent'

export type {
  IExtensionEventType,
  IExtensionMeta,
  IExtensionEventHandlers,
} from './@types/IExtension'
