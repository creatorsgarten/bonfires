import { Ability, AbilityBuilder } from '@casl/ability'

import { AppAbility } from './ability.types'
import { systemPermissions } from './system.permissions'

import { User } from '../../models'

import { SystemRole } from '../../generated/prisma/system-role.enum'

/** Get the abilities for the platform user. */
export function getSystemUserAbility(user: User): AppAbility {
  const builder = new AbilityBuilder<AppAbility>(Ability)

  const permissions = systemPermissions[user.role ?? SystemRole.Member]

  // Edge case: role does not exist in the mapping
  if (typeof permissions !== 'function') {
    throw new Error(`Trying to use unknown role "${user.role}"`)
  }

  // Apply the permissions for that role.
  permissions(user, builder)

  return builder.build()
}
