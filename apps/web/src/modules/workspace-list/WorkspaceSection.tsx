import React from 'react'
import 'twin.macro'

import { WorkspaceFragment } from '@gql'

import { EventListCard } from './event-card/EventListCard'

interface Props {
  workspace: WorkspaceFragment
}

export const WorkspaceSection = ({ workspace }: Props) => (
  <section>
    <h1 tw="text-lg xs:text-xl sm:text-2xl font-medium">{workspace.name}</h1>

    <div tw="flex flex-wrap justify-between xs:justify-start xs:space-x-2">
      {workspace.events?.map(({ id, name, icon, color }) => (
        <EventListCard
          key={id}
          url={`/event/${id}`}
          {...{ name, icon, color }}
        />
      ))}

      <EventListCard
        tw="text-gray-500"
        name="Add an Event"
        color="#a5b1c2"
        icon="plus"
        iconSize="xs"
      />
    </div>
  </section>
)
