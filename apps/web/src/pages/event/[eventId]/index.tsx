import React from 'react'
import { useRouter } from 'next/router'

import 'twin.macro'

import { EventDashboardView } from '../../../modules/event-dashboard/EventDashboardView'

export function EventDashboardPage() {
  return <EventDashboardView />
}

export default EventDashboardPage
