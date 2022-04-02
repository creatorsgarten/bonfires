import { Agenda } from '@gql'

const slotOf = (slot: number) => (a: Agenda) => a.slot >= slot

export function agendaFromSlot(slot: number, agendas: Agenda[]) {
  agendas = [...agendas].sort((a, b) => a?.slot - b?.slot)

  const current = agendas.find(slotOf(slot))
  if (!current) return { current: null, next: null }

  const next = agendas.find(slotOf(current?.slot + 1)) ?? null

  return { current, next }
}
