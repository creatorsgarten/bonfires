import 'twin.macro'

import { DateTime } from 'luxon'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { replayTimeAtom } from './store'

export const ReplayControl = () => {
  const router = useRouter()
  const [replayTime, setTime] = useAtom(replayTimeAtom)

  if (router.query.replay !== 'true') return null

  const isPlaying = replayTime === false
  const play = () => setTime(isPlaying ? DateTime.now() : false)

  return (
    <div tw="h-8 absolute bottom-0 left-0 w-full bg-gray-800 text-gray-700">
      <div tw="flex px-2 py-2 relative">
        <button
          onClick={play}
          tw="flex items-center justify-center w-12 h-12 appearance-none border-none absolute right-8 bottom-0 rounded-full bg-pink-500 shadow-2xl cursor-pointer"
        >
          <FontAwesomeIcon
            size="2x"
            tw="text-white"
            icon={isPlaying ? 'pause' : 'play'}
          />
        </button>
      </div>
    </div>
  )
}
