import { Agenda } from '@gql'

const slotOf = (slot: number) => (a: Agenda) =>
  slot >= a.startSlot && slot <= a.endSlot

export function agendaFromSlot(slot: number, agendas: Agenda[]) {
  agendas = [...agendas].sort((a, b) => a?.endSlot - b?.endSlot)

  const current = agendas.find(slotOf(slot))
  if (!current) return { current: null, next: null }

  const next = agendas.find(slotOf(current?.endSlot + 1)) ?? null

  return { current, next }
}
