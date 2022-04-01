import React from 'react'
import tw from 'twin.macro'

import { useEvent } from 'apps/web/src/hooks/useEvent'

const EventSignPage = () => {
  const { event } = useEvent()

  return (
    <div
      tw="flex justify-center items-center min-h-screen bg-gray-50 text-7xl font-semibold text-white text-center break-all"
      css={{ background: event?.color ?? '' }}
    >
      {event?.name}
    </div>
  )
}

export default EventSignPage
