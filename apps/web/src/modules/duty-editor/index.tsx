import 'twin.macro'

import { useAtom } from 'jotai'

import { Column } from 'react-table'
import { useEffect, useMemo, useReducer } from 'react'

import { EditableTable } from './EditableTable'

import { Duty } from './types'
import { setupDayAtom } from './atoms/day.atom'
import { createColumns } from './utils/createColumns'

import { Debug } from '../ui/Debug'
import { ErrorBoundary } from '../ui/ErrorBoundary'

import { useEvent } from '../../hooks/useEvent'

/** Edit agenda and duties, and plan out your event operations. */
export const DutyEditor = () => {
  const { event } = useEvent()

  const [day, setupDay] = useAtom(setupDayAtom)
  const [filtered, toggle] = useReducer((n) => !n, false)

  const today = event?.today

  const columns = useMemo(() => createColumns(today ?? null), [today])

  const canView = (c: Column<Duty>) =>
    !filtered || ['slot', 'time', 'agenda'].includes(c.accessor as string)

  useEffect(() => {
    if (!today) return

    setupDay(today)
  }, [setupDay, today])

  return (
    <div tw="space-y-4">
      <div tw="shadow-2xl rounded-lg bg-[#111]">
        <ErrorBoundary>
          <EditableTable columns={columns.filter(canView)} data={day.duties} />
        </ErrorBoundary>
      </div>

      <div tw="flex items-center space-x-1">
        <input
          type="checkbox"
          checked={filtered}
          onChange={toggle}
          id="show-all"
        />

        <label tw="text-white text-xs" htmlFor="show-all">
          แสดงแค่งานของคุณ
        </label>
      </div>

      <Debug data={day.duties} />
    </div>
  )
}
