import { useAtomValue } from 'jotai'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

import { replayTimeAtom } from '../modules/replay/store'

export function useCurrentTime() {
  const replayTime = useAtomValue(replayTimeAtom)
  const [time, setTime] = useState<DateTime | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(DateTime.now()), 1000)

    return () => clearInterval(timer)
  }, [])

  if (replayTime) return replayTime

  return time
}
