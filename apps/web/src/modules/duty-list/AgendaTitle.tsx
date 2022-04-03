import 'twin.macro'

import { useMemo } from 'react'
import { useAtom } from 'jotai'

import { agendaAtom } from '../store/day.atom'

export const AgendaTitle = ({ slot = 0 }) => {
  const [agendas] = useAtom(agendaAtom)

  const agenda = useMemo(() => {
    return agendas.find((a) => a.slot === slot)
  }, [slot, agendas])

  return (
    <div tw="text-left text-gray-200 text-sm sm:text-base">
      คิวที่ {slot}: {agenda?.title}
    </div>
  )
}
