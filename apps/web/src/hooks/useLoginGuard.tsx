import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useCurrentUserQuery } from '@gql'

export function useLoginRedirectGuard() {
  const router = useRouter()
  const userQuery = useCurrentUserQuery()

  useEffect(() => {
    const { loading, data } = userQuery

    if (!loading && !data?.me.id) router.push('/login')
  }, [router, userQuery])
}
