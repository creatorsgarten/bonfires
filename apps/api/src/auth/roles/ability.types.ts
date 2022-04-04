import { Ability, AbilityBuilder, ForcedSubject } from '@casl/ability'

import { User } from '../../models'

export type Action = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type Subject =
  | 'all'
  | 'User'
  | 'Workspace'
  | 'Event'
  | 'Day'
  | 'Agenda'
  | 'Duty'

type Forced = ForcedSubject<Exclude<Subject, 'all'>>

export type AppAbility = Ability<[Action, Subject | Forced]>

export type DefinePermissions = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void
