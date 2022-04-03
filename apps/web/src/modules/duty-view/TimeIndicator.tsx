import 'twin.macro'
import { DateTime } from 'luxon'

import { Card, Small } from './Card'

import { progressToGradient } from './utils/gradient-progress'

import type { TimeSlotInfo } from '../../hooks/useTimeSlot'

type Props = Partial<TimeSlotInfo>

export const TimeIndicator = (props: Props) => {
  const { slot, remaining, time } = props ?? {}

  // Gradient progress bar
  const progressBar = progressToGradient(remaining?.as('seconds') ?? 0)

  // Have we started running the queue yet?
  const isSlotReady = slot !== undefined
  const isQueueRunning = isSlotReady && slot >= 0

  // Do we want to show the remaining time indicator?
  const showRemaining = isSlotReady && slot >= -1

  return (
    <Card tw="xs:text-xl sm:text-2xl font-light">
      <div tw="flex items-center justify-around px-3 py-2 bg-white rounded-t-lg">
        <div>
          {time?.toLocaleString(DateTime.TIME_24_WITH_SECONDS) ?? '00:00:00'}
        </div>

        {isQueueRunning && (
          <div>
            <Small>คิว</Small> {slot ?? 0}
          </div>
        )}

        {showRemaining && (
          <div>
            <Small>เหลือ</Small> {remaining?.toFormat('mm:ss') ?? '00:00'}
          </div>
        )}
      </div>

      <div
        tw="bg-purple-300 w-full h-[5px] rounded-b-lg"
        style={{ background: progressBar }}
      />
    </Card>
  )
}
