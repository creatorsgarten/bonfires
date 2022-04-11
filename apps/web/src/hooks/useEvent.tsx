import { useEventQuery } from '@gql'

import { useRouter } from 'next/router'

export function useEvent({ owned = false } = {}) {
  const router = useRouter()

  const eventId = parseInt(router.query.eventId as string)

  const { data, loading } = useEventQuery({
    skip: !eventId,
    variables: { eventId, owned },
    pollInterval: 2000,
  })

  const event = data?.event

  return { event, loading }
}
