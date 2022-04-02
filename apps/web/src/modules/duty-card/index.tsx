import 'twin.macro'

import { Assignee, AssigneeAvatars } from './AssigneeAvatar'

import { SwipeableCard } from '../ui/SwipeableCard'

interface Props {
  title: string
  assignees?: Assignee[] | null
}

export const DutyCard = ({ title, assignees }: Props) => {
  const assigneeSection = <AssigneeAvatars assignees={assignees} />

  return (
    <SwipeableCard decoration={assigneeSection}>
      <div tw="flex h-full w-1 xs:w-2 bg-red-400 absolute top-0 rounded-l-lg" />

      <p tw="px-6 text-gray-900 text-left text-base xs:text-xl sm:text-2xl m-0 break-words truncate">
        {title}
      </p>
    </SwipeableCard>
  )
}
