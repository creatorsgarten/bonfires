import 'twin.macro'

import { Card, Small } from './Card'

import { useTimeSlot } from '../../hooks/useTimeSlot'

interface Props {
  startsAt: string
}

export const TimeIndicator = (props: Props) => {
  const { currentTime, slot, remaining } = useTimeSlot(props.startsAt)

  return (
    <Card tw="xs:text-xl sm:text-2xl font-light">
      <div tw="flex items-center justify-around px-3 py-2 bg-white rounded-t-lg">
        <div>{currentTime}</div>

        <div>
          <Small>คิว</Small> {slot}
        </div>

        <div>
          <Small>เหลือ</Small> {remaining?.toFormat('mm:ss')}
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
