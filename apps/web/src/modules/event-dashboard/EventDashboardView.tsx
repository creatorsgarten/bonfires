import 'twin.macro'

import React from 'react'
import { truncate } from 'lodash'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEventQuery } from '@gql'

import { Tile } from '../ui/Tile'
import { routes } from '../../utils/routes.constants'

import SimpleLoader from '../loader/SimpleLoader'

interface SubappTileProps {
  name: string
  icon: IconProp
  color: string
  href: string
}

const SubappTile = ({ name, icon, color, href }: SubappTileProps) => (
  <div tw="flex flex-col items-center w-24 sm:w-32 text-black no-underline">
    <Link href={href} passHref>
      <a>
        <Tile bg={color}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </Tile>
      </a>
    </Link>

    <p tw="text-sm text-center leading-snug">
      {truncate(name, { length: 25 })}
    </p>
  </div>
)

export const EventDashboardView = () => {
  const router = useRouter()
  const eventId = parseInt(router.query.eventId as string)

  const { data, loading } = useEventQuery({
    variables: { eventId },
    skip: !eventId,
  })

  const event = data?.event
  const id = event?.id ?? null

  if (loading) return <SimpleLoader />

  return (
    <div tw="flex justify-center min-h-screen bg-gray-50 text-7xl font-semibold text-white text-center break-all py-12">
      <div tw="flex flex-wrap justify-between xs:justify-start xs:space-x-2">
        <SubappTile
          name="Runner View"
          icon="person-running"
          color="#eb3b5a"
          href={routes.runner(id)}
        />

        <SubappTile
          name="Duty Editor"
          icon="table-list"
          color="#8854d0"
          href={routes.duty(id)}
        />
      </div>
    </div>
  )
}
