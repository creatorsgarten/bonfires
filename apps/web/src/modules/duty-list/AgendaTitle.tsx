import 'twin.macro'

import { useMemo } from 'react'
import { useAtom } from 'jotai'

import { dayAtom } from '../store/day.atom'
import { timeFromSlot } from '../../utils/slot'
import { DateTime } from 'luxon'

export const AgendaTitle = ({ slot = 0 }) => {
  const [day] = useAtom(dayAtom)

  const agenda = useMemo(() => {
    return day?.agendas?.find((a) => a.slot === slot)
  }, [slot, day])

  const time = useMemo(() => {
    const date = timeFromSlot(slot, day?.startsAt)

    return date.toLocaleString(DateTime.TIME_24_SIMPLE)
  }, [slot, day])

  return (
    <div tw="text-left text-gray-200 text-sm sm:text-base">
      {time} · คิว {slot} · {agenda?.title}
    </div>
  )
}
