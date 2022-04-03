import { atom } from 'jotai'

import { EventQuery } from '@gql'

import { dutyAtom } from './duty.atom'

import { createDutyState } from '../utils/createDutyState'

type Event = EventQuery['event']

type Day = Event['today']
type CurrentStaff = Event['me']

export const dayAtom = atom<Day | null>(null)
export const currentStaffAtom = atom<CurrentStaff | null>(null)

export const setupDayAtom = atom(null, (get, set, day: Day) => {
  set(dayAtom, day)
  set(dutyAtom, createDutyState(day))
})

export const setupEventAtom = atom(null, (get, set, event: Event) => {
  set(setupDayAtom, event.today)
  set(currentStaffAtom, event.me)
})
