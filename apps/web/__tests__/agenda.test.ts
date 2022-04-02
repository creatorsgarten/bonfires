import type { Agenda } from '@gql'

import { agendaFromSlot } from '../src/utils/agenda'

const agendas: Agenda[] = [
  {
    id: '1',
    title: 'First',
    slot: 0,
  },

  {
    id: '2',
    title: 'Second',
    slot: 3,
  },

  {
    id: '3',
    title: 'Third',
    slot: 4,
  },

  {
    id: '3',
    title: 'End',
    slot: 8,
  },
]

describe('agenda', () => {
  it.each([
    [-1, undefined, 'First'],
    [0, 'First', 'Second'],
    [2, 'First', 'Second'],
    [3, 'Second', 'Third'],
    [5, 'Third', 'End'],
    [10, 'End', undefined],
  ])(
    'can get the current agenda from slot',
    (slot: number, current: string | undefined, next: string | undefined) => {
      const agenda = agendaFromSlot(slot, agendas)

      expect(agenda?.current?.title).toBe(current)
      expect(agenda?.next?.title).toBe(next)
    }
  )
})
