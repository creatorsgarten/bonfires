import {expectType} from 'tsd'

import type {RootStateOf} from '@eventkit/core'
import type {NotionExtension, ScheduleExtension} from '@eventkit/extensions'

type Actual = RootStateOf<[ScheduleExtension, NotionExtension]>

const value: Actual = {
  schedule: {sessions: []},
  notion: null,
}

expectType<Actual>(value)
