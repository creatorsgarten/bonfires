import React from 'react'
import tw from 'twin.macro'
import { useRouter } from 'next/router'

import { useEventQuery } from '@gql'

export const EventDashboardView = () => {
  const router = useRouter()
  const eventId = parseInt(router.query.eventId as string)

  const { data, loading } = useEventQuery({
    variables: { eventId },
  })

  const event = data?.event

  return (
    <div
      tw="flex justify-center items-center min-h-screen bg-gray-50 text-7xl font-semibold text-white text-center break-all"
      css={{ background: event?.color ?? '' }}
    >
      {event?.name}
    </div>
  )
}
