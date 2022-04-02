import { DateTime, Duration } from 'luxon'
import { useMemo } from 'react'
import { remainingTimeInSlot, slotFromTime } from '../utils/slot'

import { useCurrentTime } from './useCurrentTime'

const slotDuration = 10

interface Result {
  slot: number
  currentTime: string
  remaining: Duration
}

export function useTimeSlot(startsAt: string): Result {
  const time = useCurrentTime()

  return useMemo(() => {
    if (!time)
      return {
        slot: 0,
        currentTime: '00:00:00',
        remaining: Duration.fromObject({}),
      }

    const currentTime = time.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
    const slot = slotFromTime(startsAt, slotDuration, time)
    const remaining = remainingTimeInSlot(startsAt, slotDuration, time)

    return { slot, currentTime, remaining }
  }, [startsAt, time])
}
