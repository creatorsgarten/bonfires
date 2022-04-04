import { DefinePermissions } from './ability.types'

import { SystemRole } from '../../models'

/** System-wide permission definition. */
export const systemPermissions: Record<SystemRole, DefinePermissions> = {
  /** System admin will have access to everything. */
  Admin(user, { can }) {
    can('manage', 'Workspace')
  },

  Member(user, { can }) {
    can('manage', 'Workspace', {})
    can('manage', 'Event', {})
    can('manage', 'Day', {})
    can('update', 'User', { id: user.id })
  },
}
