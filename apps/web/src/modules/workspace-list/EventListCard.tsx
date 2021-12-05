import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { truncate } from 'lodash'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import { Tile } from './EventListTile'

interface Props {
  name: string
  icon: string | null
  color: string | null

  url?: string
  iconSize?: SizeProp
}

export const EventListCard = (props: Props) => {
  const { name = '', icon, color, iconSize = 'lg', url = '' } = props

  function title() {
    if (!icon) return name.slice(0, 2)

    return <FontAwesomeIcon icon={icon as IconProp} size={iconSize} />
  }

  return (
    <Link href={url} passHref>
      <a tw="flex flex-col items-center w-24 sm:w-32 text-black no-underline">
        <Tile bg={color}>{title()}</Tile>

        <p tw="text-sm text-center leading-snug">
          {truncate(name, { length: 25 })}
        </p>
      </a>
    </Link>
  )
}
