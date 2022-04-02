import 'twin.macro'
import { DateTime } from 'luxon'

import { Card, Small } from './Card'

import type { TimeSlotInfo } from '../../hooks/useTimeSlot'

type Props = Partial<TimeSlotInfo>

export const TimeIndicator = (props: Props) => {
  const { slot, remaining, time } = props ?? {}

  return (
    <Card tw="xs:text-xl sm:text-2xl font-light">
      <div tw="flex items-center justify-around px-3 py-2 bg-white rounded-t-lg">
        <div>
          {time?.toLocaleString(DateTime.TIME_24_WITH_SECONDS) ?? '00:00:00'}
        </div>

        <div>
          <Small>คิว</Small> {slot ?? 0}
        </div>

        <div>
          <Small>เหลือ</Small> {remaining?.toFormat('mm:ss') ?? '00:00'}
        </div>
      </div>

      <div
        tw="bg-purple-300 w-full h-[6px] rounded-b-lg"
        style={{
          background: `linear-gradient(45deg, rgb(155, 89, 182) 10%, transparent)`,
        }}
      />
    </Card>
  )
}
