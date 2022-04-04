import tw from 'twin.macro'

import { Staff, User } from '@gql'

import { colorHash } from './color'

export type Assignee = Pick<Staff, 'id' | 'displayName'> & {
  user: Pick<User, 'id' | 'photo' | 'displayName'>
}

interface Props {
  assignees?: Assignee[] | null
}

const Circle = tw.div`flex items-center justify-center text-center bg-gray-700 w-7 h-7 rounded-full shadow-2xl border-white border-2 border-solid bg-cover`

const Avatar = ({ assignee }: { assignee: Assignee }) => {
  const photo = assignee.user.photo
  const title = assignee.displayName ?? assignee.user.displayName ?? 'Staff'

  if (!photo) {
    const background = colorHash.hex(assignee.user.id)

    return (
      <Circle title={title} style={{ background }}>
        {title.substring(0, 2)}
      </Circle>
    )
  }

  return <Circle title={title} style={{ backgroundImage: `url(${photo})` }} />
}

export const AssigneeAvatars = ({ assignees }: Props) => {
  if (!assignees || assignees.length === 0) return null

  return (
    <div tw="absolute right-2.5 bottom-[-15px]">
      <div tw="flex space-x-1">
        {assignees?.map((assignee) => (
          <Avatar key={assignee.id} assignee={assignee} />
        ))}
      </div>
    </div>
  )
}
