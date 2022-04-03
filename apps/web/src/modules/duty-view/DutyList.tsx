import 'twin.macro'

import { EventQuery } from '@gql'

import { DutyCard } from '../duty-card'

type Duties = EventQuery['event']['today']['duties']

interface Props {
  duties: Duties
}

export const DutyList = (props: Props) => {
  const duties = props.duties ?? []

  return (
    <div tw="flex flex-col space-y-6">
      {duties.map((duty) => (
        <DutyCard key={duty.id} title={duty.title} assignees={duty.assignees} />
      ))}
    </div>
  )
}
