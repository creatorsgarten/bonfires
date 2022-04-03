import { atom } from 'jotai'

import { currentStaffAtom, dayAtom } from './day.atom'

import { createColumns } from '../utils/createColumns'

const baseColumns = ['slot', 'time', 'agenda']

export const managedDutyAtom = atom(false)

export const toggleManagedDutyAtom = atom(
  (get) => get(managedDutyAtom),
  (get, set) => set(managedDutyAtom, !get(managedDutyAtom))
)

export const dutyColumnsAtom = atom((get) => {
  const today = get(dayAtom)
  const me = get(currentStaffAtom)
  const filtered = get(managedDutyAtom)

  const columns = createColumns(today ?? null)
  if (!filtered) return columns

  const roles = me?.roles?.map((r) => `duties.${r.id}`) ?? []

  return columns.filter((c) => {
    return [...baseColumns, ...roles].includes(c.accessor as string)
  })
})
