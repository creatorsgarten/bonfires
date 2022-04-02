import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

export function useCurrentTime() {
  const [time, setTime] = useState<DateTime | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(DateTime.now()), 1000)

    return () => clearInterval(timer)
  }, [])

  return time
}
