import 'twin.macro'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

import Link from 'next/link'

import { AgendaCard } from './AgendaCard'
import { TimeIndicator } from './TimeIndicator'

import { DutyList } from '../duty-list'

import { useEvent } from '../../hooks/useEvent'
import { useTimeSlot } from '../../hooks/useTimeSlot'

import { Debug } from '../ui/Debug'
import { ReplayControl } from '../replay/ReplayControl'
import { ReassignDutyDialog } from '../dialog-reassign-duty'

import { dayAtom } from '../store/day.atom'
import { routes } from '../../utils/routes.constants'

export const DutyView = () => {
  const { event } = useEvent({ owned: true })
  const { today } = event ?? {}

  const timeslot = useTimeSlot(today?.startsAt)
  const slot = timeslot?.slot ?? null

  const [, setDay] = useAtom(dayAtom)
  useEffect(() => today && setDay(today), [setDay, today])

  return (
    <div tw="flex min-h-screen font-semibold text-white text-center break-all bg-[#2C3D50]">
      <div tw="flex justify-center flex-col mx-auto w-full xs:max-w-lg px-4 sm:px-10 space-y-4 my-6 overflow-scroll">
        <ReassignDutyDialog />

        <TimeIndicator {...timeslot} />

        <AgendaCard slot={slot} agendas={today?.agendas ?? []} />

        <div tw="py-1" />

        <DutyList duties={today?.duties} slot={slot} />

        <div>
          <span tw="text-xs text-gray-300">{event?.name}</span>

          <span> | </span>

          <Link href={routes.duty(event?.id ?? null)}>
            <a tw="text-green-300 text-xs cursor-pointer">เปิด duty editor</a>
          </Link>
        </div>

        <Debug data={event} />
        <ReplayControl starts={today?.startsAt} />
      </div>
    </div>
  )
}
