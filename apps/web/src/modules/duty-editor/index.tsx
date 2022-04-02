import 'twin.macro'

import { EditableTable } from './EditableTable'

// Used to edit agenda/duties and plan out the day.
export const DutyEditor = () => {
  return (
    <div tw="shadow-2xl rounded-lg bg-[#111]">
      <EditableTable
        columns={[
          { Header: 'Q', accessor: 'slot', maxWidth: 60 },
          { Header: 'Agenda 📙', accessor: 'agenda', maxWidth: 220 },
          { Header: 'OD 💛', accessor: 'od' },
          { Header: 'Food 🍣', accessor: 'food' },
          { Header: 'Onboard 🙏🏻', accessor: 'onboard' },
          { Header: 'Venue 🏖', accessor: 'venue' },
        ]}
        data={[
          {
            slot: 0,
            agenda: 'สตาฟเตรียมตัวหน้างาน',
            od: 'เคาะห้อง เช็ค staff',
            onboard: 'เตรียมโต๊ะลงทะเบียน',
            food: 'หาข้าวให้ staff',
          },

          {
            slot: 2,
            agenda: 'เปิดโต๊ะลงทะเบียน',
            od: 'เช็ค registration',
            onboard: 'on duty',
          },

          {
            slot: 4,
            agenda: 'เล่น ice breaking',
            od: '',
            onboard: 'ให้ staff ที่ไม่ได้ on duty มาทานข้าว',
          },
          { slot: 10, agenda: 'จบกิจกรรม', od: '' },
        ]}
      />
    </div>
  )
}
