import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useCurrentUserQuery } from '@gql'

const publicPaths = ['/register', '/login']

export function useLoginRedirectGuard() {
  const router = useRouter()
  const userQuery = useCurrentUserQuery()

  useEffect(() => {
    const { loading, data } = userQuery

    if (!loading && !data?.me.id && !publicPaths.includes(router.route)) {
      router.push('/login')
    }
  }, [router, userQuery.loading])
}
