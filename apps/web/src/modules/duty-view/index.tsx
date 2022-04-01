import 'twin.macro'

import { useEvent } from '../../hooks/useEvent'

export const DutyView = () => {
  const { event } = useEvent()

  return (
    <div tw="flex justify-center items-center min-h-screen font-semibold text-white text-center break-all bg-gray-800">
      <div tw="mx-auto w-full max-w-2xl px-4 sm:px-10 space-y-10">
        <div tw="flex flex-col text-gray-800 xs:text-xl sm:text-2xl font-light">
          <div tw="flex items-center justify-around px-3 py-2 bg-white rounded-t-md">
            <div>00:00:00</div>
            <div>
              <span tw="text-xs sm:text-xl">คิว</span> 00
            </div>
            <div>
              <span tw="text-xs sm:text-xl">เหลือ</span> 00:00
            </div>
          </div>

          <div tw="bg-purple-300 w-full h-[6px] rounded-b-lg" />
        </div>

        <div tw="flex flex-col text-gray-800 shadow-2xl">
          <div tw="px-2 py-4 bg-white rounded-t-md text-2xl sm:text-3xl">
            <div tw="text-center w-full">นอนหลับพักผ่อน</div>
          </div>

          <div tw="rounded-b-lg text-white px-2 py-2 text-xs xs:text-sm sm:text-base">
            ต่อไป รับน้องมาจากโรงแรม · ช่วง chaos
          </div>
        </div>

        <div tw="text-xs text-gray-300">{event?.name}</div>
      </div>
    </div>
  )
}
