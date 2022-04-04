import 'twin.macro'

import { groupBy } from 'lodash'

import { EventQuery } from '@gql'

import { DutyCard } from '../duty-card'
import { AgendaTitle } from './AgendaTitle'

type Duties = EventQuery['event']['today']['duties']

export interface DutyListProps {
  duties: Duties
}

export const DutyListSection = (props: DutyListProps) => {
  const dutiesBySlot = groupBy(props.duties, (d) => d.slot)

  return (
    <div tw="flex flex-col space-y-10">
      {Object.entries(dutiesBySlot).map(([slot, duties]) => (
        <div tw="space-y-3" key={slot}>
          <AgendaTitle slot={parseInt(slot)} />

          <DutyGroup duties={duties} />
        </div>
      ))}
    </div>
  )
}

export const DutyGroup = (props: DutyListProps) => (
  <div tw="flex flex-col space-y-6">
    {props.duties?.map((duty) => (
      <DutyCard key={duty.id} duty={duty} />
    ))}
  </div>
)
