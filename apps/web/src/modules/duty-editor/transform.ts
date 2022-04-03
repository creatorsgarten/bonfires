import { uniqBy } from 'lodash'
import { DateTime } from 'luxon'
import { Column } from 'react-table'

import { EventQuery } from '@gql'

import { Duty } from './store'

import { timeFromSlot } from '../../utils/slot'

type InputDay = EventQuery['event']['today']

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

export function createDutyState(day: InputDay | null): Duty[] {
  if (!day?.agendas) return []

  return [...day.agendas]
    ?.sort((a, b) => a.slot - b.slot)
    ?.map((a): Duty => {
      const time = timeFromSlot(a.slot, day.startsAt)

      const duties = day.duties
        ?.filter((d) => d.slot === a.slot)
        .map((d) => ({ [d.id]: d.title }))
        .reduce((a, b) => ({ ...a, ...b }), {})

      return {
        id: a.id,
        slot: a.slot,
        agenda: a.title,
        time: time.toLocaleString(DateTime.TIME_24_SIMPLE),
        duties,
      }
    })
}
