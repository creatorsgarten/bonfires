import React from 'react'
import { useRouter } from 'next/router'

import 'twin.macro'

export function EventDashboardPage() {
  const router = useRouter()

  const id = router.query.eventId as string

  return (
    <div tw="flex justify-center items-center min-h-screen bg-red-500 text-9xl font-semibold text-white">
      {id}
    </div>
  )
}

export default EventDashboardPage
