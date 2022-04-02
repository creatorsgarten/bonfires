import 'twin.macro'

import { Staff, User } from '@gql'

export type Assignee = Pick<Staff, 'id' | 'displayName'> & {
  user: Pick<User, 'photo' | 'displayName'>
}

interface Props {
  assignees?: Assignee[] | null
}

export const AssigneeAvatars = ({ assignees }: Props) => {
  if (!assignees || assignees.length === 0) return null

  return (
    <div tw="absolute right-2.5 bottom-[-15px]">
      <div tw="flex space-x-1">
        {assignees?.map((assignee) => (
          <div
            key={assignee.id}
            title={assignee.displayName ?? assignee.user.displayName ?? 'Staff'}
            style={{ backgroundImage: `url(${assignee.user.photo})` }}
            tw="bg-gray-700 flex w-7 h-7 rounded-full shadow-2xl border-white border-2 border-solid bg-cover"
          />
        ))}
      </div>
    </div>
  )
}
