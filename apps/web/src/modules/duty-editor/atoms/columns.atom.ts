import { atom } from 'jotai'
import { Column } from 'react-table'

import { Duty } from '../types'

import { currentStaffAtom, dayAtom } from './day.atom'

const baseColumns: Column<Duty>[] = [
  { Header: '#', accessor: 'slot', maxWidth: 55 },

  { Header: 'Time', accessor: 'time', maxWidth: 85 },
  { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 220 },
]

export const managedDutyAtom = atom(false)

export const toggleManagedDutyAtom = atom(
  (get) => get(managedDutyAtom),
  (get, set) => set(managedDutyAtom, !get(managedDutyAtom))
)

export const dutyColumnsAtom = atom((get) => {
  const today = get(dayAtom)
  const me = get(currentStaffAtom)
  const filtered = get(managedDutyAtom)

  const columns: Column<Duty>[] =
    today?.roles
      ?.filter((role) => {
        if (!filtered) return role

        return me?.roles?.some((my) => role.id === my.id)
      })
      ?.map((r) => ({
        Header: r.title,
        accessor: `duties.${r.id}` as any,
      })) ?? []

  console.log('cx', { columns })

  return [...baseColumns, ...columns]
})
