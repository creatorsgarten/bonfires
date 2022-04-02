import 'twin.macro'

import { AgendaCard } from './AgendaCard'
import { TimeIndicator } from './TimeIndicator'

import { DutyCard } from '../duty-card'

import { useEvent } from '../../hooks/useEvent'
import { useTimeSlot } from '../../hooks/useTimeSlot'

export const DutyView = () => {
  const { event } = useEvent()

  const day = event?.currentDay
  const duties = day?.duties ?? []

  const timeslot = useTimeSlot(day?.startsAt)

  return (
    <div tw="flex justify-center items-center min-h-screen font-semibold text-white text-center break-all bg-[#2C3D50]">
      <div tw="flex flex-col mx-auto w-full xs:max-w-lg px-4 sm:px-10 space-y-4 my-6">
        <TimeIndicator {...timeslot} />

        <AgendaCard slot={timeslot?.slot} agendas={day?.agendas} />

        <div tw="py-1" />

        <div tw="flex flex-col space-y-8">
          {duties.map((duty) => (
            <DutyCard
              key={duty.id}
              title={duty.title}
              assignees={duty.assignees}
            />
          ))}
        </div>

        <div tw="text-xs text-gray-300">{event?.name}</div>

        {/* <div tw="text-left text-[8px] font-light">
          <pre>{JSON.stringify(event, null, 2)}</pre>
        </div> */}
      </div>
    </div>
  )
}
