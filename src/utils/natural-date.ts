import {IEventDateTimeInput} from '../@types/IEvent'

export const parseNaturalDate = (
  _input: IEventDateTimeInput
): Date | [Date, Date] => new Date()
