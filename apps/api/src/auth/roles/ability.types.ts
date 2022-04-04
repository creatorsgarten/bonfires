import {
  User,
  Workspace,
  Event,
  Day,
  Profile,
  Squad,
  Task,
  Role,
  Staff,
  Agenda,
  Duty,
  Prisma,
} from '@prisma/client'

import { PrismaAbility, Subjects } from '@casl/prisma'
import { AbilityClass, AbilityBuilder, subject } from '@casl/ability'

interface SubjectMap {
  Agenda: Agenda
  Day: Day
  Duty: Duty
  Event: Event
  Profile: Profile
  Role: Role
  Squad: Squad
  Staff: Staff
  Task: Task
  User: User
  Workspace: Workspace
}

type AppSubjects = Subjects<SubjectMap>
type Action = 'manage' | 'create' | 'read' | 'update' | 'delete'
export type AppAbility = PrismaAbility<[Action, AppSubjects]>

export type DefinePermissions = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void
