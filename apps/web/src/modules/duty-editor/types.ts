import { EventQuery } from '@gql'

export interface Duty extends DutyMeta {
  time: string
  agenda: string

  duties?: { [duty: string]: string }
}

export interface DutyMeta {
  id: string | null
  slot: number
}

export interface SetDutyInput extends DutyMeta {
  field: string
  value: string
}

export type InputDay = EventQuery['event']['today']
