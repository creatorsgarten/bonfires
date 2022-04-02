import type { Agenda } from '@gql'

import { agendaFromSlot } from '../src/utils/agenda'

const agendas: Agenda[] = [
  {
    id: '1',
    title: 'First',
    startSlot: 0,
    endSlot: 2,
  },
  {
    id: '2',
    title: 'Second',
    startSlot: 3,
    endSlot: 4,
  },
  {
    id: '3',
    title: 'Third',
    startSlot: 5,
    endSlot: 6,
  },
]

describe('agenda', () => {
  it.each([
    [0, 'First', 'Second'],
    [3, 'Second', 'Third'],
    [5, 'Third', undefined],
    [10, undefined, undefined],
  ])(
    'can get the current agenda from slot',
    (slot: number, current: string | undefined, next: string | undefined) => {
      const agenda = agendaFromSlot(slot, agendas)

      expect(agenda?.current?.title).toBe(current)
      expect(agenda?.next?.title).toBe(next)
    }
  )
})
