import { atom } from 'jotai'

export const reassignDutyDialogOpen = atom(false)

export const openReassignDutyDialog = atom(null, (get, set) =>
  set(reassignDutyDialogOpen, true)
)
