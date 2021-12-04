import tw from 'twin.macro'

const Container = tw.section`
	flex justify-center items-center min-h-screen bg-gray-50
`

const Title = tw.h1`
	text-2xl sm:text-4xl font-extralight
	text-gray-800 text-center
`

export function Dashboard() {
  return (
    <Container>
      <Title>EventKit Organizer Dashboard</Title>
    </Container>
  )
}

export default Dashboard
