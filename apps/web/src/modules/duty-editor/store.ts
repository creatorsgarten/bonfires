import { atom } from 'jotai'
import { atomWithImmer } from 'jotai/immer'

export interface Duty {
  slot: number
  time: string
  agenda: string

  duties?: { [duty: string]: string }
}

interface SetDutyInput {
  slot: number
  field: string
  value: string
}

const initialState: Duty[] = [
  {
    slot: 0,
    time: '09:30',
    agenda: 'สตาฟเตรียมตัวหน้างาน',
  },

  {
    slot: 1,
    time: '09:40',
    agenda: 'เปิดโต๊ะลงทะเบียน',
  },

  {
    slot: 2,
    time: '09:50',
    agenda: 'เล่น ice breaking',
  },

  {
    slot: 3,
    time: '10:00',
    agenda: '',
  },

  {
    slot: 4,
    time: '10:10',
    agenda: 'จบกิจกรรม',
  },
]

export const dutyAtom = atomWithImmer<Duty[]>(initialState)

export const setDutyAtom = atom(
  (get) => get(dutyAtom),
  async (get, set, data: SetDutyInput) => {
    set(dutyAtom, (draft) => {
      if (!draft[data.slot]) {
        draft[data.slot] = { slot: data.slot, time: '', agenda: '' }
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
