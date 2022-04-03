import { useAtom } from 'jotai'
import { Row, Column } from 'react-table'
import { useEffect, useState } from 'react'

import 'twin.macro'

import { updateDutyAtom } from './atoms/updateDuty.atom'

interface CellProps {
  value: string

  row: Row
  column: Column
}

// Create an editable cell renderer
export const EditableCell = (props: CellProps) => {
  const {
    row,
    value: initialValue,
    column: { id, maxWidth },
  } = props

  const [, updateDuty] = useAtom(updateDutyAtom)

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue ?? '')

  const readOnly = ['slot', 'time'].includes(id ?? '')

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    if (readOnly || !id) return

    updateDuty({ id, slot: row.index, field: id, value })
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input
      value={value ?? ''}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      readOnly={readOnly}
      tw="flex border-none h-full text-lg rounded-none appearance-none overflow-visible py-1 md:py-3 bg-transparent text-white px-2 md:px-4 w-full"
      css={{
        fontFamily: 'inherit',
        outline: 'none',
        maxWidth,

        '&:focus': {
          outline: '2px solid #7bed9f',

          ...(readOnly && { outline: '2px solid #dfe4ea' }),
        },
      }}
    />
  )
}
