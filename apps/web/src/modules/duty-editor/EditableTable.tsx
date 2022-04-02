import { useEffect, useState } from 'react'
import { useTable, Row, Column } from 'react-table'

import 'twin.macro'

interface CellProps {
  value: string
  row: Row
  column: Column
}

// Create an editable cell renderer
const EditableCell = (props: CellProps) => {
  const {
    value: initialValue,
    row: { index },
    column: { id, maxWidth },
  } = props

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    // update(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      tw="flex border-none h-full text-lg rounded-none appearance-none overflow-visible py-1 md:py-3 bg-transparent text-white px-2 md:px-4 w-full"
      css={{
        fontFamily: 'inherit',
        outline: 'none',
        maxWidth,

        '&:focus': {
          outline: '2px solid #1c8ee6',
        },
      }}
    />
  )
}

interface TableProps<T extends object = any> {
  data: T[]
  columns: Column<T>[]
}

// Be sure to pass our update and the skipPageReset option
export const EditableTable = (props: TableProps) => {
  const { columns, data } = props

  const table = useTable({
    data,
    columns,
    defaultColumn: { Cell: EditableCell, maxWidth: 180 },
  })

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    table

  console.log('tbl', table)

  return (
    <table {...getTableProps()} tw="text-white table">
      <thead tw="bg-[#222]">
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, j) => (
              <th
                {...column.getHeaderProps()}
                key={j}
                tw="text-left px-4 py-2 text-lg md:text-xl truncate"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()} tw="table-row-group">
        {rows.map((row, i) => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()} key={i} tw="table-row">
              {row.cells.map((cell, j) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    key={j}
                    tw="table-cell"
                    style={{ maxWidth: cell.column.maxWidth }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
