import { Agenda } from '@gql'

export function agendaFromSlot(slot: number, agendas: Agenda[]) {
  agendas = [...agendas].sort((a, b) => a?.slot - b?.slot)

  let i = -1

  for (let j = 0; j < agendas.length; j++) {
    if (agendas[j].slot <= slot) i = j
  }

  return { current: agendas[i], next: agendas[i + 1] }
}
