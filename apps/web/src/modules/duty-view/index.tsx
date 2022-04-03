import 'twin.macro'

import { DutyList } from './DutyList'
import { AgendaCard } from './AgendaCard'
import { TimeIndicator } from './TimeIndicator'

import { useEvent } from '../../hooks/useEvent'
import { useTimeSlot } from '../../hooks/useTimeSlot'

import { Debug } from '../ui/Debug'
import { ReplayControl } from '../replay/ReplayControl'

export const DutyView = () => {
  const { event } = useEvent({ owned: true })

  const { today, me } = event ?? {}

  const timeslot = useTimeSlot(today?.startsAt)

  return (
    <div tw="flex min-h-screen font-semibold text-white text-center break-all bg-[#2C3D50]">
      <div tw="flex justify-center flex-col mx-auto w-full xs:max-w-lg px-4 sm:px-10 space-y-4 my-6">
        <TimeIndicator {...timeslot} />

        <AgendaCard
          slot={timeslot?.slot ?? null}
          agendas={today?.agendas ?? []}
        />

        <div tw="py-1" />

        <DutyList duties={today?.duties} />

        <div tw="text-xs text-gray-300">{event?.name}</div>

        <Debug data={event} />
        <ReplayControl starts={today?.startsAt} />
      </div>
    </div>
  )
}
