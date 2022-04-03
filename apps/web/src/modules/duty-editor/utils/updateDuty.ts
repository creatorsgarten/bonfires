import { Draft } from 'immer'

import { Duty, SetDutyInput } from '../types'

export function updateDuty(draft: Draft<Duty>[], data: SetDutyInput) {
  if (!draft[data.slot]) {
    draft[data.slot] = {
      id: data.id,
      slot: data.slot,
      time: '',
      agenda: '',
    }
  }

  draft[data.slot].slot = data.slot

  if (data.field === 'agenda' || data.field === 'time') {
    draft[data.slot].agenda = data.value
  }

  if (data.field.startsWith('duties.')) {
    draft[data.slot].duties = {
      ...draft[data.slot].duties,
      [data.field.replace('duties.', '')]: data.value,
    }
  }

  return draft
}
