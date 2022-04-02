import 'twin.macro'
import { useMemo } from 'react'

import { Card } from './Card'
import { TimeIndicator } from './TimeIndicator'

import { DutyCard } from '../duty-card'

import { agendaFromSlot } from '../../utils/agenda'

import { useEvent } from '../../hooks/useEvent'
import { useTimeSlot } from '../../hooks/useTimeSlot'

export const DutyView = () => {
  const { event } = useEvent()

  const day = event?.currentDay
  const duties = day?.duties ?? []

  const timeslot = useTimeSlot(day?.startsAt)
  const { slot } = timeslot ?? {}

  const agenda = useMemo(() => {
    return agendaFromSlot(slot ?? -1, day?.agendas ?? [])
  }, [day?.agendas, slot])

  return (
    <div tw="flex justify-center items-center min-h-screen font-semibold text-white text-center break-all bg-[#2C3D50]">
      <div tw="flex flex-col mx-auto w-full xs:max-w-lg px-4 sm:px-10 space-y-4 my-6">
        <TimeIndicator {...timeslot} />

        {agenda?.current && (
          <Card>
            <div tw="px-2 bg-white rounded-t-lg text-xl xs:text-2xl sm:text-3xl">
              <p tw="text-center my-2 xs:my-3 sm:my-4 font-semibold truncate">
                {agenda.current.title}
              </p>
            </div>

            <div tw="rounded-b-lg text-white px-2 py-2 text-xs xs:text-sm sm:text-base bg-transparent truncate">
              {agenda.next ? (
                <span>ต่อไป {agenda?.next?.title}</span>
              ) : (
                <span>หมดช่วงเวลากิจกรรม</span>
              )}
            </div>
          </Card>
        )}

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

        <div tw="text-left text-[8px] font-light">
          <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
