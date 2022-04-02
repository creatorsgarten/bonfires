import 'twin.macro'
import { useMemo } from 'react'

import { Agenda } from '@gql'

import { Card } from './Card'

import { agendaFromSlot } from '../../utils/agenda'

interface Props {
  slot?: number | null
  agendas?: Agenda[] | null
}

const PrimaryCard = ({ title = '', subtitle = '' }) => (
  <Card>
    <div tw="px-2 bg-white rounded-t-lg text-xl xs:text-2xl sm:text-3xl">
      <p tw="text-center my-2 xs:my-3 sm:my-4 font-semibold truncate">
        {title}
      </p>
    </div>

    <div tw="rounded-b-lg text-white px-2 py-2 text-xs xs:text-sm sm:text-base bg-transparent truncate font-light">
      {subtitle}
    </div>
  </Card>
)

export const AgendaCard = ({ slot, agendas }: Props) => {
  const agenda = useMemo(() => {
    return agendaFromSlot(slot ?? -1, agendas ?? [])
  }, [agendas, slot])

  const title = slot ? agenda?.current.title : '[กำลังเตรียมตารางกิจกรรม...]'

  const subtitle = useMemo(() => {
    if (!slot) return 'รอสักครู่นะ 🌟'
    if (!agenda?.next) return 'หมดช่วงเวลากิจกรรม'

    return `ต่อไป ${agenda.next.title}`
  }, [slot, agenda])

  return <PrimaryCard title={title} subtitle={subtitle} />
}
