import 'twin.macro'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

import Link from 'next/link'

import { EditableTable } from './EditableTable'

import { dutyAtom } from './atoms/duty.atom'

import { setupEventAtom } from '../store/day.atom'
import { dutyColumnsAtom, toggleManagedDutyAtom } from './atoms/columns.atom'

import { ErrorBoundary } from '../ui/ErrorBoundary'

import { useEvent } from '../../hooks/useEvent'
import { routes } from '../../utils/routes.constants'

/** Edit agenda and duties, and plan out your event operations. */
export const DutyEditor = () => {
  const { event } = useEvent()

  // Fetches the duties and columns for the data table.
  const [duties] = useAtom(dutyAtom)
  const [columns] = useAtom(dutyColumnsAtom)

  // Show only my own duties if this checkbox is ticked.
  const [showOwnedDuty, toggleOwnedDuty] = useAtom(toggleManagedDutyAtom)

  // Setup the state for the duty editor.
  const [, setupEvent] = useAtom(setupEventAtom)

  useEffect(() => {
    if (event) setupEvent(event)
  }, [event, setupEvent])

  return (
    <div tw="space-y-4 py-12">
      <div tw="shadow-2xl rounded-lg bg-[#111]">
        <ErrorBoundary>
          <EditableTable columns={columns} data={duties} />
        </ErrorBoundary>
      </div>

      <div tw="flex items-center space-x-1">
        <input
          type="checkbox"
          checked={showOwnedDuty}
          onChange={toggleOwnedDuty}
          id="show-all"
        />

        <label tw="text-white text-xs" htmlFor="show-all">
          แสดงแค่งานของคุณ
        </label>

        <span tw="text-white text-xs"> | </span>

        <Link href={routes.runner(event?.id ?? null)}>
          <a tw="text-green-300 text-xs cursor-pointer">เปิด runner view</a>
        </Link>
      </div>
    </div>
  )
}
