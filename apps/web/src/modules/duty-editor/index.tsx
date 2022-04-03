import 'twin.macro'

import { useAtom } from 'jotai'
import { Column } from 'react-table'
import { useMemo, useReducer } from 'react'

import { EditableTable } from './EditableTable'

import { Duty, dutyAtom, mockIds } from './store'

import { Debug } from '../ui/Debug'

function createColumns(): Column<Duty>[] {
  const duties = [
    { id: mockIds.od, title: 'OD 💛' },
    { id: mockIds.food, title: 'Food 🍣' },
    { id: mockIds.venue, title: 'Venue 🏖' },
    { id: mockIds.onboard, title: 'Onboard 🙏🏻' },
  ]

  const dutyColumns = duties.map((d) => ({
    Header: d.title,
    accessor: `duties.${d.id}`,
  }))

  return [
    { Header: '#', accessor: 'slot', maxWidth: 55 },

    { Header: 'Time', accessor: 'time', maxWidth: 85 },
    { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 220 },

    ...(dutyColumns as Column<Duty>[]),
  ]
}

// Used to edit agenda/duties and plan out the day.
export const DutyEditor = () => {
  const [duties] = useAtom(dutyAtom)
  const [filtered, toggle] = useReducer((n) => !n, false)

  const columns = useMemo(() => createColumns(), [])

  const canView = (c: Column<Duty>) =>
    !filtered ||
    ['slot', 'time', 'agenda', `duties.${mockIds.food}`].includes(
      c.accessor as string
    )

  return (
    <div tw="space-y-4">
      <div tw="shadow-2xl rounded-lg bg-[#111]">
        <EditableTable columns={columns.filter(canView)} data={duties} />
      </div>

      <div tw="flex items-center space-x-1">
        <input
          type="checkbox"
          checked={filtered}
          onChange={toggle}
          id="show-all"
        />

        <label tw="text-white text-xs" htmlFor="show-all">
          แสดงแค่งานของคุณ
        </label>
      </div>

      <Debug data={duties} />
    </div>
  )
}
