import { atom } from 'jotai'

import { dutyAtom } from './duty.atom'

import { SetDutyInput } from '../types'

import { updateDuty } from '../utils/updateDuty'
import { updateAgendaBySlotAtom, updateDutyBySlotAtom } from '../utils/mutation'

import { dayAtom } from '../../store/day.atom'

export const updateDutyAtom = atom(
  (get) => get(dutyAtom),
  async (get, set, data: SetDutyInput) => {
    const day = get(dayAtom)
    if (!day) return

    set(dutyAtom, async (draft) => {
      const { slot, field, value } = data

      const input = { slot, title: value, dayId: parseInt(day?.id) }

      if (field.startsWith('duties')) {
        const managerId = field.replace('duties.', '')

        // If the value is the same, we don't need to update.
        const prev = draft[slot]?.duties?.[managerId]
        if (value === prev) return

        await set(updateDutyBySlotAtom, {
          variables: { input: { ...input, managerId: parseInt(managerId) } },
        })
      }

      if (field === 'agenda') {
        // If the value is the same, we don't need to update.
        if (value === draft[slot]?.agenda) return

        await set(updateAgendaBySlotAtom, { variables: { input } })
      }

      draft = updateDuty(draft, data)

      return draft
    })
  }
)
