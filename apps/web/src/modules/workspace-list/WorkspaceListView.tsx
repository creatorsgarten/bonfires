import React from 'react'
import 'twin.macro'

import { useWorkspaceListQuery } from '@gql'

import { WorkspaceSection } from './WorkspaceSection'
import { AddWorkspaceButton } from './AddWorkspaceButton'

import SimpleLoader from '../loader/SimpleLoader'

export const WorkspaceListView = () => {
  const { data, loading } = useWorkspaceListQuery({
    variables: { userId: 1 },
  })

  const workspaces = data?.user?.workspaces

  return (
    <div tw="bg-gray-50 min-h-screen py-4">
      <main tw="flex flex-col max-w-5xl mx-auto px-8">
        {loading && <SimpleLoader />}

        {workspaces?.map((space) => (
          <WorkspaceSection key={space.id} workspace={space} />
        ))}

        <AddWorkspaceButton />
      </main>
    </div>
  )
}
