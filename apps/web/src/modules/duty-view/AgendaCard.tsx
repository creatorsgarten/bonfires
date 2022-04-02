import 'twin.macro'
import { useMemo } from 'react'

import { Agenda } from '@gql'

import { Card } from './Card'

import { agendaFromSlot } from '../../utils/agenda'

interface Props {
  slot: number | null
  agendas: Agenda[]
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
    if (!slot) return null

    return agendaFromSlot(slot, agendas)
  }, [agendas, slot])

  const title = useMemo(() => {
    if (slot === null) return '[กำลังเตรียมตารางกิจกรรม...]'
    if (slot < 0) return '[ยังไม่เริ่มรันคิวแรก]'
    if (!agenda?.current) return '[หมดช่วงเวลากิจกรรม]'

    return agenda.current.title
  }, [slot, agenda])

  const subtitle = useMemo(() => {
    const next = agenda?.next

    if (slot === null) return 'รอสักครู่นะ 🌟'

    if (slot < 0) {
      if (!next) return 'ขอให้วันนี้เป็นวันที่ดีนะ เธอทำได้ 💪🏻'

      return `คิวแรก ${next.title}`
    }

    if (!next || !agenda?.current) return 'ไว้เจอกันวันพรุ่งนี้นะ 💛'

    if (next.slot === slot + 1) return `ถัดไป ${next.title}`

    return `ช่วงหน้า ${next.title} · คิว ${next.slot}`
  }, [slot, agenda])

  return <PrimaryCard title={title} subtitle={subtitle} />
}
