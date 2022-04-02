import 'twin.macro'

import { EditableTable } from './EditableTable'

// Used to edit agenda/duties and plan out the day.
export const DutyEditor = () => {
  return (
    <div tw="shadow-2xl rounded-lg bg-[#111]">
      <EditableTable
        columns={[
          { Header: 'Q', accessor: 'slot', maxWidth: 50 },
          { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 250 },
          { Header: 'OD 💛', accessor: 'od' },
          { Header: 'Food 🍣', accessor: 'food' },
          { Header: 'Onboard 🙏🏻', accessor: 'onboard' },
          { Header: 'Venue 🏖', accessor: 'venue' },
        ]}
        data={[
          { slot: 0, agenda: 'สตาฟเตรียมตัวหน้างาน', od: '' },
          { slot: 1, agenda: 'เปิดโต๊ะลงทะเบียน', od: '' },
          { slot: 2, agenda: 'เล่น ice breaking', od: '' },
          { slot: 3, agenda: 'จบกิจกรรม', od: '' },
        ]}
      />
    </div>
  )
}
