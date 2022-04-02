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

export function useTimeSlot(startsAt: string): TimeSlotInfo | null {
  const time = useCurrentTime()

  return useMemo(() => {
    if (!time) return null

    const slot = slotFromTime(startsAt, slotDuration, time)
    const remaining = remainingTimeInSlot(startsAt, slotDuration, time)

    return { slot, time, remaining }
  }, [startsAt, time])
}
