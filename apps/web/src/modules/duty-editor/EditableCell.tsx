import { useEffect, useState } from 'react'
import { Row, Column } from 'react-table'

import 'twin.macro'

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

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue ?? '')

  const readOnly = ['slot', 'time', 'agenda'].includes(id ?? '')

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    console.log(row.index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input
      value={value ?? ''}
      onChange={onChange}
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
