import { DateTime } from 'luxon'

import {
  slotFromTime,
  timeFromSlot,
  remainingTimeInSlot,
} from '../src/utils/slot'

const starts = '2022-04-02T09:30:00.000+07:00'

describe('time slot calculation', () => {
  it.each([
    [0, '09:30'],
    [1, '09:40'],
    [5, '10:20'],
  ])('shows the time from the given slot', (slot, expected) => {
    const time = timeFromSlot(slot, starts)

    expect(time.toLocaleString(DateTime.TIME_24_SIMPLE)).toBe(expected)
  })

  it.each([
    ['09:20', -1],
    ['09:32', 0],
    ['09:40', 1],
    ['09:47', 1],
    ['10:04', 3],
    ['20:15', 64],
  ])('shows the slot from the given time', (timeNow, slot) => {
    const now = DateTime.fromISO(`2022-04-02T${timeNow}:00.000+07:00`)

    expect(slotFromTime(starts, 10, now)).toBe(slot)
  })

  it.each([
    ['09:30:00', '10:00'],
    ['09:30:30', '09:30'],
    ['09:35:00', '05:00'],
    ['09:39:50', '00:10'],
    ['22:00:55', '09:05'],
  ])('shows the remaining time in the current slot', (timeNow, expected) => {
    const now = DateTime.fromISO(`2022-04-02T${timeNow}.000+07:00`)
    const remaining = remainingTimeInSlot(starts, 10, now)
    const remainingTime = remaining.toFormat('mm:ss')

    expect(remainingTime).toBe(expected)
  })
})
