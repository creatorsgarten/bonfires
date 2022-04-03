import 'twin.macro'

import { useAtom } from 'jotai'
import { uniqBy } from 'lodash'
import { Column } from 'react-table'
import { useMemo, useReducer } from 'react'

import { EventQuery } from '@gql'

import { EditableTable } from './EditableTable'

import { Duty, dutyAtom } from './store'

import { Debug } from '../ui/Debug'
import { useEvent } from '../../hooks/useEvent'

type InputDay = EventQuery['event']['today']

const fixedColumns: Column<Duty>[] = [
  { Header: '#', accessor: 'slot', maxWidth: 55 },

  { Header: 'Time', accessor: 'time', maxWidth: 85 },
  { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 220 },
]

function createColumns(day: InputDay | null): Column<Duty>[] {
  if (!day) return fixedColumns

  let dutyColumns = day.duties?.map((duty) => ({
    Header: duty.manager.title,
    accessor: `duties.${duty.manager.id}`,
  }))

  dutyColumns = uniqBy(dutyColumns, (d) => d.accessor)

  return [...fixedColumns, ...(dutyColumns as Column<Duty>[])]
}

// Used to edit agenda/duties and plan out the day.
export const DutyEditor = () => {
  const { event } = useEvent()

  const [duties] = useAtom(dutyAtom)
  const [filtered, toggle] = useReducer((n) => !n, false)

  const today = event?.today

  const columns = useMemo(() => createColumns(today ?? null), [today])

  const canView = (c: Column<Duty>) =>
    !filtered || ['slot', 'time', 'agenda'].includes(c.accessor as string)

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
