import { useTable, Column } from 'react-table'

import 'twin.macro'

import { EditableCell } from './EditableCell'

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
    defaultColumn: { Cell: EditableCell, maxWidth: 200 },
  })

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    table

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
