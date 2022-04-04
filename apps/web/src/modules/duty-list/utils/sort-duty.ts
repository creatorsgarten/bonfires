import { Duty } from '../types'

import { roleSortOrder } from '../../../utils/roles.constants'

export const sortDuty = (a: Duty, b: Duty) =>
  roleSortOrder.indexOf(a.manager.type) - roleSortOrder.indexOf(b.manager.type)
