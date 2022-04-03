import { DateTime } from 'luxon'
import { uniqBy, max } from 'lodash'
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

  const slots = [...day.agendas].map((s) => s.slot)
  const high = max(slots) ?? 0

  return [...Array(high + 2)].map((_, slot): Duty => {
    const agenda = day.agendas?.find((a) => a.slot === slot)
    const date = timeFromSlot(slot, day.startsAt)
    const time = date.toLocaleString(DateTime.TIME_24_SIMPLE)

    if (!agenda) return { id: null, slot, time, agenda: '', duties: {} }

    const duties = day.duties
      ?.filter((d) => d.slot === agenda.slot)
      .map((d) => ({ [d.id]: d.title }))
      .reduce((a, b) => ({ ...a, ...b }), {})

    return {
      slot,
      time,
      duties,

      id: agenda.id,
      agenda: agenda.title,
    }
  })
}
