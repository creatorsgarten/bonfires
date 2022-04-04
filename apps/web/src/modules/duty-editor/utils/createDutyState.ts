import { max } from 'lodash'
import { DateTime } from 'luxon'

import { InputDay, Duty } from '../types'

import { timeFromSlot } from '../../../utils/slot'

export function createDutyState(day: InputDay | null): Duty[] {
  if (!day?.agendas) return []

  const slots = [...day.agendas].map((s) => s.slot)

  // Ensure that there are at least 10 slots.
  const high = Math.max(max(slots) ?? 0, 9)

  return [...Array(high + 2)].map((_, slot): Duty => {
    const agenda = day.agendas?.find((a) => a.slot === slot)
    const date = timeFromSlot(slot, day.startsAt)
    const time = date.toLocaleString(DateTime.TIME_24_SIMPLE)

    const duties = day.duties
      ?.filter((d) => d.slot === slot)
      .map((d) => ({ [d.manager.id]: d.title }))
      .reduce((a, b) => ({ ...a, ...b }), {})

    return {
      slot,
      time,
      duties,

      id: agenda?.id ?? null,
      agenda: agenda?.title ?? '',
    }
  })
}
