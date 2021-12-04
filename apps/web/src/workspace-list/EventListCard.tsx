import React from 'react'
import tw from 'twin.macro'
import { truncate } from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  name: string
  icon?: string | null
  color?: string | null

  iconSize?: SizeProp
}

const Tile = tw.div`
	flex items-center justify-center text-center
	bg-neonblue w-16 h-16 p-1
	text-3xl text-white rounded-lg
	font-semibold cursor-pointer shadow-lg
	hover:bg-gray-800
`

export const EventListCard = (props: Props) => {
  const { name = '', icon, color, iconSize = 'lg' } = props

  return (
    <div tw="flex flex-col items-center w-36">
      <Tile css={{ background: color ?? '' }}>
        {icon ? (
          <FontAwesomeIcon icon={icon as IconProp} size={iconSize} />
        ) : (
          name.slice(0, 2)
        )}
      </Tile>

      <p tw="text-sm text-center leading-snug">
        {truncate(name, { length: 25 })}
      </p>
    </div>
  )
}
