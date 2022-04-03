import 'twin.macro'

import { nanoid } from 'nanoid'
import { Column } from 'react-table'

import { EditableTable } from './EditableTable'
import { useMemo, useReducer } from 'react'

interface Duty {
  slot: number
  time: string
  agenda: string

  duties?: { [duty: string]: string }
}

const ids = {
  od: nanoid(4),
  food: nanoid(4),
  venue: nanoid(4),
  onboard: nanoid(4),
}

const duties = [
  { id: ids.od, title: 'OD 💛' },
  { id: ids.food, title: 'Food 🍣' },
  { id: ids.venue, title: 'Venue 🏖' },
  { id: ids.onboard, title: 'Onboard 🙏🏻' },
]

function createColumns(): Column<Duty>[] {
  const dutyColumns = duties.map((d) => ({
    Header: d.title,
    accessor: `duties.${d.id}`,
  }))

  return [
    { Header: '#', accessor: 'slot', maxWidth: 55 },

    { Header: 'Time', accessor: 'time', maxWidth: 85 },
    { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 220 },

    ...(dutyColumns as Column<Duty>[]),
  ]
}

const data: Duty[] = [
  {
    slot: 0,
    time: '09:30',
    agenda: 'สตาฟเตรียมตัวหน้างาน',

    duties: {
      [ids.od]: 'เคาะห้อง เช็ค staff',
      [ids.onboard]: 'เตรียมโต๊ะลงทะเบียน',
      [ids.food]: 'หาข้าวให้ staff',
    },
  },

  {
    slot: 1,
    time: '09:40',
    agenda: 'เปิดโต๊ะลงทะเบียน',

    duties: {
      [ids.od]: 'เช็ค registration',
      [ids.onboard]: 'on duty',
    },
  },

  {
    slot: 2,
    time: '09:50',
    agenda: 'เล่น ice breaking',

    duties: {
      [ids.onboard]: 'ให้ staff ที่ไม่ได้ on duty มาทานข้าว',
    },
  },

  {
    slot: 3,
    time: '10:00',
    agenda: '',
  },

  {
    slot: 4,
    time: '10:10',
    agenda: 'จบกิจกรรม',

    duties: {
      [ids.onboard]: 'เก็บโต๊ะลงทะเบียน',
      [ids.venue]: 'เก็บสถานที่',
    },
  },
]

// Used to edit agenda/duties and plan out the day.
export const DutyEditor = () => {
  const [filtered, toggle] = useReducer((n) => !n, false)

  const columns = useMemo(() => createColumns(), [])

  const canView = (c: Column<Duty>) =>
    !filtered ||
    ['slot', 'time', 'agenda', 'food'].includes(c.accessor as string)

  return (
    <div tw="space-y-4">
      <div tw="shadow-2xl rounded-lg bg-[#111]">
        <EditableTable columns={columns.filter(canView)} data={data} />
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
    </div>
  )
}
