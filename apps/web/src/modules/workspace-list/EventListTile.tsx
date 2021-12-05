import { darken } from 'color2k'
import tw, { css, styled } from 'twin.macro'

interface TileProps {
  bg: string | null
}

export const Tile = styled.div<TileProps>((props) => [
  tw`
    flex items-center justify-center text-center
    w-12 h-12 sm:w-16 sm:h-16
    bg-neonblue p-2 sm:p-1
    text-3xl text-white rounded-lg
    font-semibold cursor-pointer shadow-lg`,

  props.bg &&
    css({
      background: props.bg,
      '&:hover': { background: darken(props.bg, 0.1) },
    }),
])
