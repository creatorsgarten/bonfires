import 'twin.macro'

import React from 'react'
import Link from 'next/link'
import { truncate } from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import { Tile } from '../../ui/Tile'

interface Props {
  name: string

  icon?: string | null
  color?: string | null

  url?: string
  iconSize?: SizeProp

  className?: string
}

export const EventListCard = (props: Props) => {
  const { name = '', icon, color, iconSize = 'lg', url = '', className } = props

  function title() {
    if (!icon) return name.slice(0, 2)

    return <FontAwesomeIcon icon={icon as IconProp} size={iconSize} />
  }

  return (
    <Link href={url} passHref>
      <a
        tw="flex flex-col items-center w-24 sm:w-32 text-black no-underline"
        className={className}
      >
        <Tile bg={color}>{title()}</Tile>

        <p tw="text-sm text-center leading-snug">
          {truncate(name, { length: 25 })}
        </p>
      </a>
    </Link>
  )
}
