import tw from 'twin.macro'

import { useWorkspaceListQuery } from '@gql'

const EventTile = tw.div`
	flex items-center justify-center text-center
	bg-neonblue w-20 h-20
	text-3xl text-white rounded-lg
	font-semibold uppercase
`

export const WorkspaceListView = () => {
  const { data } = useWorkspaceListQuery({ variables: { userId: 1 } })

  const workspaces = data?.user?.workspaces

  return (
    <div tw="bg-gray-50 min-h-screen">
      <main tw="flex flex-col max-w-5xl mx-auto px-8">
        {workspaces?.map((workspace) => (
          <section key={workspace.id}>
            <h1 tw="text-3xl font-light">{workspace.name}</h1>

            <div tw="flex flex-col justify-center">
              {workspace.events?.map((event) => (
                <div key={event.id}>
                  <EventTile>{event.name.slice(0, 2)}</EventTile>

                  <p>{event.name}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
