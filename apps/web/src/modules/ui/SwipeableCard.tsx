import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import 'twin.macro'

const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: 'end',
}
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: 'start',
}

export const SwipeableCard: React.FC = ({ children }) => {
  const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    ...left,
  }))

  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,
      ...(x < 0 ? left : right),
      immediate: (name) => active && name === 'x',
    })
  )

  const circleScale = x.to({
    map: Math.abs,
    range: [50, 300],
    output: [0.5, 1],
    extrapolate: 'clamp',
  })

  return (
    <div tw="flex items-center justify-center h-full">
      <animated.div
        {...bind()}
        style={{ background: bg }}
        tw="relative w-full pointer-events-auto px-8 grid items-center rounded-lg shadow-2xl select-none py-2"
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
    </div>
  )
}
