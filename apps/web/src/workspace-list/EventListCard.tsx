import React from 'react'
import tw from 'twin.macro'
import { truncate } from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Event } from '@gql'

interface Props {
  event: Omit<Event, '_count'>
}

const Tile = tw.div`
	flex items-center justify-center text-center
	bg-neonblue w-20 h-20
	text-3xl text-white rounded-lg
	font-semibold cursor-pointer shadow-lg
	hover:bg-gray-800
`

export const EventListCard = (props: Props) => {
  const { event } = props

  const icon = event.icon as IconProp
  const background = event.color ?? ''

  return (
    <div tw="flex flex-col items-center w-36">
      <Tile css={{ background }}>
        {icon ? (
          <FontAwesomeIcon icon={icon} size="lg" />
        ) : (
          event.name.slice(0, 2)
        )}
      </Tile>

      <p tw="text-center leading-snug">
        {truncate(event.name, { length: 25 })}
      </p>
    </div>
  )
}
