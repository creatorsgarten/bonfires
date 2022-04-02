import 'twin.macro'

import { clamp } from 'lodash'
import { DateTime } from 'luxon'

import { Card, Small } from './Card'

import type { TimeSlotInfo } from '../../hooks/useTimeSlot'

type Props = Partial<TimeSlotInfo>

function toGradient(seconds: number) {
  const color1 = '#f5576c'
  const color2 = '#f093fb'

  const percentage = ((seconds ?? 0) / (10 * 60)) * 100
  const p2 = percentage < 5 ? 0 : percentage + 4

  // prettier-ignore
  return `linear-gradient(90deg, ${color1} 1%, ${color2} ${percentage}%, transparent ${p2}%, transparent 100%)`
}

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
        style={{ background: toGradient(remaining?.as('seconds') ?? 0) }}
      />
    </Card>
  )
}
