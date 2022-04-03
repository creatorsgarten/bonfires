import { TypedDocumentNode } from '@apollo/client'

import {
  UpdateDutyBySlotDocument,
  UpdateDutyBySlotMutation,
  UpdateDutyBySlotMutationVariables,
  UpdateDutyByIdDocument,
  UpdateDutyByIdMutation,
  UpdateDutyByIdMutationVariables,
} from '@gql'

import { atomWithMutation } from '../apollo'

type BySlot = TypedDocumentNode<
  UpdateDutyBySlotMutation,
  UpdateDutyBySlotMutationVariables
>

type ById = TypedDocumentNode<
  UpdateDutyByIdMutation,
  UpdateDutyByIdMutationVariables
>

export const updateDutyBySlotAtom = atomWithMutation((get) => ({
  mutation: UpdateDutyBySlotDocument as BySlot,
}))

export const updateDutyByIdAtom = atomWithMutation((get) => ({
  mutation: UpdateDutyByIdDocument as ById,
}))
