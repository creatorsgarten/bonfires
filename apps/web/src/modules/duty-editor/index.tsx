import 'twin.macro'

import { EditableTable } from './EditableTable'

// Used to edit agenda/duties and plan out the day.
export const DutyEditor = () => {
  return (
    <div tw="shadow-2xl rounded-lg bg-[#111]">
      <EditableTable
        columns={[
          { Header: 'Q', accessor: 'slot', maxWidth: 60 },
          { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 250 },
          { Header: 'OD 💛', accessor: 'od' },
          { Header: 'Food 🍣', accessor: 'food' },
          { Header: 'Onboard 🙏🏻', accessor: 'onboard' },
          { Header: 'Venue 🏖', accessor: 'venue' },
        ]}
        data={[
          { slot: 0, agenda: 'สตาฟเตรียมตัวหน้างาน', od: '' },
          { slot: 2, agenda: 'เปิดโต๊ะลงทะเบียน', od: '' },
          { slot: 4, agenda: 'เล่น ice breaking', od: '' },
          { slot: 10, agenda: 'จบกิจกรรม', od: '' },
        ]}
      />
    </div>
  )
}
