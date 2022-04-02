import { DateTime } from 'luxon'
import { slotFromTime, timeFromSlot } from '../src/utils/slot'

const starts = '2022-04-02T09:30:00.000+07:00'

describe('time slot calculation', () => {
  it.each([
    [0, '09:30'],
    [1, '09:40'],
    [5, '10:20'],
  ])('can compute the time at the given slot', (slot, expected) => {
    expect(timeFromSlot(slot, starts)).toBe(expected)
  })

  it.each([
    ['09:20', 0],
    ['09:32', 0],
    ['09:40', 1],
    ['09:47', 1],
    ['10:04', 3],
    ['20:15', 64],
  ])('can compute the slot at the given time', (nowTime, slot) => {
    const now = DateTime.fromISO(`2022-04-02T${nowTime}:00.000+07:00`)

    expect(slotFromTime(starts, 10, now)).toBe(slot)
  })
})
