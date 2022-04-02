import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

export function useCurrentTime() {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(DateTime.now().toFormat('hh:mm:ss'))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return time
}
