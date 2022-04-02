import tw from 'twin.macro'

import { DateTime } from 'luxon'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { replayTimeAtom } from './store'

const Fab = tw.button`flex items-center justify-center w-12 h-12 appearance-none border-none rounded-full bg-pink-500 shadow-2xl cursor-pointer`
const SmallBtn = tw.button`absolute flex items-center justify-center w-8 h-8 appearance-none border-none rounded-full bg-pink-500 shadow-xl cursor-pointer`

interface Props {
  starts?: string
}

const duration = 10

export const ReplayControl = (props: Props) => {
  const router = useRouter()
  const [replayTime, setTime] = useAtom(replayTimeAtom)

  if (router.query.replay !== 'true') return null

  const isPlaying = replayTime === false
  const play = () => setTime(isPlaying ? DateTime.now() : false)

  const add = (minutes: number) =>
    replayTime && setTime(replayTime.plus({ minutes }))

  const reset = () => props.starts && setTime(DateTime.fromISO(props.starts))

  return (
    <div tw="fixed right-6 bottom-8">
      <div tw="relative">
        <Fab onClick={play}>
          <FontAwesomeIcon
            size="2x"
            tw="text-white"
            icon={isPlaying ? 'pause' : 'play'}
          />
        </Fab>

        {!isPlaying && (
          <div>
            <SmallBtn
              tw="right-[20px] bottom-[65px]"
              onClick={() => add(duration)}
            >
              <FontAwesomeIcon size="1x" tw="text-white" icon="forward" />
            </SmallBtn>

            <SmallBtn
              tw="right-[55px] bottom-[35px]"
              onClick={() => add(-duration)}
            >
              <FontAwesomeIcon size="1x" tw="text-white" icon="backward" />
            </SmallBtn>

            <SmallBtn tw="right-[60px] top-[25px]" onClick={reset}>
              <FontAwesomeIcon size="1x" tw="text-white" icon="clock" />
            </SmallBtn>
          </div>
        )}
      </div>
    </div>
  )
}
