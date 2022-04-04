import 'twin.macro'

import { colorHash } from './color'
import { AssigneeAvatars } from './AssigneeAvatar'

import { Duty } from '../duty-list/types'
import { SwipeableCard } from '../ui/SwipeableCard'

interface Props {
  duty: Duty
}

export const DutyCard = (props: Props) => {
  const { title, assignees, manager } = props.duty

  const assigneeSection = <AssigneeAvatars assignees={assignees} />

  return (
    <SwipeableCard decoration={assigneeSection}>
      <div
        tw="flex h-full w-1 xs:w-2 bg-red-400 absolute top-0 rounded-l-lg"
        style={{ background: colorHash.hex(manager.id) }}
      />

      <p tw="px-6 text-gray-900 text-left text-base xs:text-xl sm:text-2xl m-0 break-words truncate">
        {title}
      </p>
    </SwipeableCard>
  )
}
