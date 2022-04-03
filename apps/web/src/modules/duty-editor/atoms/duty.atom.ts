import { atomWithImmer } from 'jotai/immer'

import { Duty } from '../types'

export const dutyAtom = atomWithImmer<Duty[]>([])
