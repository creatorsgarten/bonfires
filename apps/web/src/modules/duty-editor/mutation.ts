import { TypedDocumentNode } from '@apollo/client'

import {
  UpdateDutyBySlotDocument,
  UpdateDutyBySlotMutation,
  UpdateDutyBySlotMutationVariables,
} from '@gql'

import { atomWithMutation } from '../apollo'

type M = TypedDocumentNode<
  UpdateDutyBySlotMutation,
  UpdateDutyBySlotMutationVariables
>

export const updateDutyBySlotAtom = atomWithMutation((get) => ({
  mutation: UpdateDutyBySlotDocument as M,
}))
