import 'twin.macro'

import { useRouter } from 'next/router'

export const Debug = ({ data }: { data: any }) => {
  const p = useRouter()

  const debug = p.query.debug === 'true'
  if (!debug) return null

  return (
    <div tw="text-left text-xs font-light absolute right-2 top-2 text-white">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
