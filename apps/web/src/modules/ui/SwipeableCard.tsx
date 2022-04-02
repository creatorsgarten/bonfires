import { clamp } from 'lodash'

import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'

import 'twin.macro'

const left = {
  bg: `linear-gradient(120deg, #f9f586 0%, #96fbc4 100%)`,
  justifySelf: 'end',
}

const right = {
  bg: `linear-gradient(120deg, #f5576c 0%, #f093fb 100%)`,
  justifySelf: 'start',
}

const CIRCLE = 50
const DRAG_MAX = 150

interface Props {
  decoration: React.ReactChild
}

export const SwipeableCard: React.FC<Props> = (props) => {
  const { decoration, children } = props

  const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    ...left,
  }))

  const bind = useDrag(({ active, movement: [x] }) => {
    api.start({
      x: active ? clamp(x, -DRAG_MAX, DRAG_MAX) : 0,
      scale: active ? 1.1 : 1,
      ...(x < 0 ? left : right),
      immediate: (name) => active && name === 'x',
    })
  })

  const circleScale = x.to({
    map: Math.abs,
    range: [CIRCLE, DRAG_MAX + CIRCLE],
    output: [0.5, 1],
    extrapolate: 'clamp',
  })

  return (
    <div tw="flex items-center justify-center h-full relative">
      <animated.div
        {...bind()}
        style={{ background: bg, touchAction: 'none' }}
        tw="relative w-full pointer-events-auto px-8 grid items-center rounded-lg shadow-2xl select-none xs:py-1 sm:py-2 overflow-hidden"
      >
        <animated.div
          style={{ scale: circleScale, justifySelf }}
          tw="w-10 h-10 rounded-full bg-white"
        />

        <animated.div
          style={{ x, scale }}
          tw="absolute bg-white h-full w-full grid items-center rounded-lg shadow-2xl transition-all duration-75 cursor-pointer"
        >
          {children}
        </animated.div>
      </animated.div>

      {decoration}
    </div>
  )
}
