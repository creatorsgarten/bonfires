import tw from 'twin.macro'

const EventTile = tw.div`
	flex items-center justify-center text-center
	bg-neonblue w-20 h-20
	text-3xl text-white rounded-lg
	font-semibold
`

export const WorkspaceListView = () => {
  return (
    <div tw="bg-gray-50 min-h-screen">
      <main tw="flex max-w-5xl mx-auto">
        <section>
          <h1 tw="text-3xl font-light">Polaris</h1>

          <div tw="flex flex-col items-center justify-center">
            <EventTile>PS</EventTile>

            <p>Polaris School</p>
          </div>
        </section>
      </main>
    </div>
  )
}
