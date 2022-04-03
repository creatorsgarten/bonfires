import 'twin.macro'

import { useAtom } from 'jotai'

import { useEffect, useMemo, useReducer } from 'react'

import { EditableTable } from './EditableTable'

import { setupDayAtom } from './atoms/day.atom'
import { createColumns } from './utils/createColumns'

import { Debug } from '../ui/Debug'
import { ErrorBoundary } from '../ui/ErrorBoundary'

import { useEvent } from '../../hooks/useEvent'

const baseColumns = ['slot', 'time', 'agenda']

/** Edit agenda and duties, and plan out your event operations. */
export const DutyEditor = () => {
  const { event } = useEvent()

  const [day, setupDay] = useAtom(setupDayAtom)
  const [filtered, toggle] = useReducer((n) => !n, false)

  const { today, me } = event ?? {}

  const columns = useMemo(() => {
    let columns = createColumns(today ?? null)

    if (filtered) {
      const roles = me?.roles?.map((r) => `duties.${r.id}`) ?? []

      columns = columns.filter((c) => {
        return [...baseColumns, ...roles].includes(c.accessor as string)
      })
    }

    return columns
  }, [today, filtered])

  console.log('cols', { me, columns })

  useEffect(() => {
    if (!today) return

    setupDay(today)
  }, [setupDay, today])

  return (
    <div tw="space-y-4">
      <div tw="shadow-2xl rounded-lg bg-[#111]">
        <ErrorBoundary>
          <EditableTable columns={columns} data={day.duties} />
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
