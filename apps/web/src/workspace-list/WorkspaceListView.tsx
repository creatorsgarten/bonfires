import React from 'react'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useWorkspaceListQuery } from '@gql'

import { EventListCard } from './EventListCard'

const AddWorkspaceButton = () => (
  <section>
    <div tw="flex items-center space-x-2 cursor-pointer">
      <FontAwesomeIcon icon="plus" tw="text-gray-500" size="xs" />

      <p tw="text-xl font-medium text-gray-500">Add a Workspace</p>
    </div>
  </section>
)

export const WorkspaceListView = () => {
  const { data } = useWorkspaceListQuery({ variables: { userId: 1 } })

  const workspaces = data?.user?.workspaces

  return (
    <div tw="bg-gray-50 min-h-screen py-4">
      <main tw="flex flex-col max-w-5xl mx-auto px-8">
        {workspaces?.map((workspace) => (
          <section key={workspace.id}>
            <h1 tw="text-lg xs:text-xl sm:text-2xl font-medium">
              {workspace.name}
            </h1>

            <div tw="flex flex-wrap sm:space-x-2">
              {workspace.events?.map(({ id, name, icon, color }) => (
                <EventListCard key={id} {...{ name, icon, color }} />
              ))}

              <EventListCard
                name="Add an Event"
                color="#a5b1c2"
                icon="plus"
                iconSize="xs"
              />
            </div>
          </section>
        ))}

        <AddWorkspaceButton />
      </main>
    </div>
  )
}
