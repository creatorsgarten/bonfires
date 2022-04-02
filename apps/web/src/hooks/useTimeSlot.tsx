import { DateTime, Duration } from 'luxon'
import { useMemo } from 'react'
import { remainingTimeInSlot, slotFromTime } from '../utils/slot'

import { useCurrentTime } from './useCurrentTime'

const slotDuration = 10

export interface TimeSlotInfo {
  slot: number
  time: DateTime
  remaining: Duration
}

export function useTimeSlot(startsAt: string): TimeSlotInfo {
  const time = useCurrentTime()

  return useMemo(() => {
    if (!time) {
      return {
        slot: 0,
        remaining: Duration.fromObject({}),
        time: DateTime.fromObject({ hour: 0, minute: 0, second: 0 }),
      }
    }

    const slot = slotFromTime(startsAt, slotDuration, time)
    const remaining = remainingTimeInSlot(startsAt, slotDuration, time)

    return { slot, time, remaining }
  }, [startsAt, time])
}
