import React from 'react'
import tw from 'twin.macro'

import { useWorkspaceListQuery } from '@gql'

import { EventListCard } from './EventListCard'

export const WorkspaceListView = () => {
  const { data } = useWorkspaceListQuery({ variables: { userId: 1 } })

  const workspaces = data?.user?.workspaces

  return (
    <div tw="bg-gray-50 min-h-screen">
      <main tw="flex flex-col max-w-5xl mx-auto px-8">
        {workspaces?.map((workspace) => (
          <section key={workspace.id}>
            <h1 tw="text-xl sm:text-3xl font-medium">{workspace.name}</h1>

            <div tw="flex space-x-2">
              {workspace.events?.map(({ id, name, icon, color }) => (
                <EventListCard key={id} {...{ name, icon, color }} />
              ))}

              <EventListCard
                name="Create an Event"
                color="#a5b1c2"
                icon="plus"
                iconSize="xs"
              />
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
