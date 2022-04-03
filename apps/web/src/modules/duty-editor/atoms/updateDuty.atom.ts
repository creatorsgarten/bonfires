import { atom } from 'jotai'

import { dutyAtom } from './duty.atom'

import { SetDutyInput } from '../types'
import { updateDutyBySlotAtom } from '../mutation'

import { updateDuty } from '../utils/updateDuty'

export const updateDutyAtom = atom(
  (get) => get(dutyAtom),
  async (get, set, data: SetDutyInput) => {
    set(dutyAtom, async (draft) => {
      draft = updateDuty(draft, data)

      await set(updateDutyBySlotAtom, {
        variables: { input: { slot: data.slot, dayId: 1, managerId: 1 } },
      })

      return draft
    })
  }
)
