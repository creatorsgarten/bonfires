import { uniqBy } from 'lodash'
import { Column } from 'react-table'

import { Duty, InputDay } from '../types'

const fixedColumns: Column<Duty>[] = [
  { Header: '#', accessor: 'slot', maxWidth: 55 },

  { Header: 'Time', accessor: 'time', maxWidth: 85 },
  { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 220 },
]

export function createColumns(day: InputDay | null): Column<Duty>[] {
  if (!day) return fixedColumns

  let dutyColumns = day.duties?.map((duty) => ({
    Header: duty.manager.title,
    accessor: `duties.${duty.manager.id}`,
  }))

  dutyColumns = uniqBy(dutyColumns, (d) => d.accessor)

  return [...fixedColumns, ...(dutyColumns as Column<Duty>[])]
}
