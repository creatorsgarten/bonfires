import { atom } from 'jotai'

import { dayAtom } from '../../store/day.atom'
import { dutyAtom } from './duty.atom'

import { SetDutyInput } from '../types'
import { updateDutyBySlotAtom } from '../mutation'

import { updateDuty } from '../utils/updateDuty'

export const updateDutyAtom = atom(
  (get) => get(dutyAtom),
  async (get, set, data: SetDutyInput) => {
    const day = get(dayAtom)
    if (!day) return

    set(dutyAtom, async (draft) => {
      if (data.field.startsWith('duties')) {
        const managerId = data.field.replace('duties.', '')

        // If the value is the same, we don't need to update.
        const prev = draft[data.slot]?.duties?.[managerId]
        if (data.value === prev) return

        await set(updateDutyBySlotAtom, {
          variables: {
            input: {
              slot: data.slot,
              dayId: parseInt(day?.id),
              managerId: parseInt(managerId),

              title: data.value,
            },
          },
        })
      }

      draft = updateDuty(draft, data)

      return draft
    })
  }
)
