import { DateTime } from 'luxon'

export const timeFromSlot = (
  slot: number,
  startsAt: string,
  slotDurationInMinutes = 10
) => DateTime.fromISO(startsAt).plus({ minutes: slot * slotDurationInMinutes })

export const slotFromTime = (
  startsAt: string,
  slotDurationInMinutes = 10,
  currentTime = DateTime.now()
) => {
  const startTime = DateTime.fromISO(startsAt)
  const diff = currentTime.diff(startTime, ['minutes'])

  return Math.floor(diff.minutes / slotDurationInMinutes)
}

export const remainingTimeInSlot = (
  startsAt: string,
  slotDurationInMinutes = 10,
  currentTime = DateTime.now()
) => {
  const slot = slotFromTime(startsAt, slotDurationInMinutes, currentTime)
  const nextSlot = timeFromSlot(slot + 1, startsAt, slotDurationInMinutes)

  return nextSlot.diff(currentTime)
}
