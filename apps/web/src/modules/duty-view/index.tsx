import 'twin.macro'

import { Card } from './Card'

import { DutyCard } from '../duty-card'

import { useEvent } from '../../hooks/useEvent'
import { TimeIndicator } from './TimeIndicator'

export const DutyView = () => {
  const { event } = useEvent()

  const day = event?.currentDay
  const duties = day?.duties ?? []

  return (
    <div tw="flex justify-center items-center min-h-screen font-semibold text-white text-center break-all bg-[#2C3D50]">
      <div tw="flex flex-col mx-auto w-full xs:max-w-lg px-4 sm:px-10 space-y-4 my-6">
        <TimeIndicator startsAt={day?.startsAt} />

        <Card>
          <div tw="px-2 bg-white rounded-t-lg text-xl xs:text-2xl sm:text-3xl">
            <p tw="text-center my-2 xs:my-3 sm:my-4 font-semibold truncate">
              พาน้องไปเล่นออลแคมป์
            </p>
          </div>

          <div tw="rounded-b-lg text-white px-2 py-2 text-xs xs:text-sm sm:text-base bg-transparent truncate">
            ต่อไป รับน้องมาจากโรงแรม · ช่วง chaos
          </div>
        </Card>

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
      </div>
    </div>
  )
}
