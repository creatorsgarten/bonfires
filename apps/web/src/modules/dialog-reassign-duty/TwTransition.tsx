import { Fragment } from 'react'

import { TwStyle } from 'twin.macro'
import { Transition, TransitionEvents } from '@headlessui/react'

type Props = {
  enter?: TwStyle
  enterFrom?: TwStyle
  enterTo?: TwStyle
  entered?: TwStyle
  leave?: TwStyle
  leaveFrom?: TwStyle
  leaveTo?: TwStyle
  children: React.ReactNode
  show?: boolean
  as?: React.ElementType
  appear?: boolean
  unmount?: boolean
} & TransitionEvents

export const TwTransition = (props: Props) => {
  const css = {
    '&.enter': props.enter,
    '&.enter-from': props.enterFrom,
    '&.enter-to': props.enterTo,
    '&.entered': props.entered,
    '&.leave': props.leave,
    '&.leave-from': props.leaveFrom,
    '&.leave-to': props.leaveTo,
  }

  return (
    <Transition
      show={props.show}
      as={Fragment}
      enter="enter"
      enterFrom="enter-from"
      enterTo="enter-to"
      entered="entered"
      leave="leave"
      leaveFrom="leave-from"
      leaveTo="leave-to"
      // @ts-ignore
      css={css}
    >
      {props.children}
    </Transition>
  )
}
