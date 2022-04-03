import { atom } from 'jotai'

import { EventQuery } from '@gql'

import { dutyAtom } from './duty.atom'

import { createDutyState } from '../utils/createDutyState'

type Day = EventQuery['event']['today']

export const dayAtom = atom<Day | null>(null)

export const setupDayAtom = atom(
  (get) => ({ duties: get(dutyAtom) }),

  (get, set, day: Day) => {
    set(dayAtom, day)
    set(dutyAtom, createDutyState(day))
  }
)
