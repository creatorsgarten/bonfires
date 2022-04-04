import { Int } from '@nestjs/graphql'

export const ID = { type: () => Int }

export { Day } from '../generated/day/day.model'
export { User } from '../generated/user/user.model'
export { Duty } from '../generated/duty/duty.model'
export { Staff } from '../generated/staff/staff.model'
export { Event } from '../generated/event/event.model'
export { Workspace } from '../generated/workspace/workspace.model'

export { SystemRole } from '../generated/prisma/system-role.enum'
