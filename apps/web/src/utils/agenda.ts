import { Agenda } from '@gql'

export function agendaFromSlot(slot: number, agendas: Agenda[]) {
  agendas = [...agendas].sort((a, b) => a?.slot - b?.slot)

  let now = -1

  for (let j = 0; j < agendas.length; j++) {
    if (!agendas[j].title) continue

    if (agendas[j].slot <= slot) now = j
  }

  const next = agendas.slice(now + 1).find((a) => a.title)

  return { current: agendas[now], next }
}
