import { atom } from 'jotai'
import { DateTime } from 'luxon'

export const replayTimeAtom = atom<DateTime | false>(false)
