import {IEventDateTimeInput} from '../@types/IEvent'

export const parseNaturalDate = (
  input: IEventDateTimeInput
): Date | [Date, Date] => new Date()
