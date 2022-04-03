import { TypedDocumentNode } from '@apollo/client'

import {
  UpdateDutyBySlotMutation,
  UpdateDutyBySlotMutationVariables,
  UpdateAgendaBySlotMutation,
  UpdateAgendaBySlotMutationVariables,
} from '@gql'

export type DutyBySlot = TypedDocumentNode<
  UpdateDutyBySlotMutation,
  UpdateDutyBySlotMutationVariables
>

export type AgendaBySlot = TypedDocumentNode<
  UpdateAgendaBySlotMutation,
  UpdateAgendaBySlotMutationVariables
>
