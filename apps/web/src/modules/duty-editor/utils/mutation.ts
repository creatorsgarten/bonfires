import { UpdateAgendaBySlotDocument, UpdateDutyBySlotDocument } from '@gql'

import { atomWithMutation } from '../../apollo'

import { DutyBySlot, AgendaBySlot } from '../types/gql.types'

export const updateDutyBySlotAtom = atomWithMutation((get) => ({
  mutation: UpdateDutyBySlotDocument as DutyBySlot,
}))

export const updateAgendaBySlotAtom = atomWithMutation((get) => ({
  mutation: UpdateAgendaBySlotDocument as AgendaBySlot,
}))
