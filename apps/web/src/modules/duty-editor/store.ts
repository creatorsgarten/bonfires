import { atom } from 'jotai'
import { atomWithImmer } from 'jotai/immer'

interface DutyMeta {
  id: string
  slot: number
}

export interface Duty extends DutyMeta {
  time: string
  agenda: string

  duties?: { [duty: string]: string }
}

interface SetDutyInput extends DutyMeta {
  field: string
  value: string
}

const initialState: Duty[] = []

export const dutyAtom = atomWithImmer(initialState)

export const setDutyAtom = atom(
  (get) => get(dutyAtom),
  async (get, set, data: SetDutyInput) => {
    set(dutyAtom, (draft) => {
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
    })
  }
)
