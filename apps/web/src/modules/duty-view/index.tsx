import tw from 'twin.macro'
import { nanoid } from 'nanoid'

import { useCurrentTime } from '../../hooks/useCurrentTime'

import { useEvent } from '../../hooks/useEvent'

const Card = tw.div`flex flex-col text-gray-800 shadow-2xl rounded-lg`

const Profile = ({ url }: { url: string }) => (
  <div
    tw="bg-gray-900 flex w-7 h-7 rounded-full shadow-2xl border-white border-2 border-solid bg-cover"
    style={{
      backgroundImage: `url(${url})`,
    }}
  />
)

const TaskCard = ({ title }: { title: string }) => (
  <div tw="flex text-gray-800 shadow-2xl rounded-lg bg-white py-2 sm:py-3 relative">
    <div tw="flex h-full w-1 xs:w-2 bg-red-400 absolute top-0 rounded-l-lg" />

    <div tw="bg-white">
      <div tw="flex justify-between px-3 xs:px-6">
        <p tw="xs:text-xl sm:text-2xl text-left m-0 break-words">{title}</p>
      </div>

      <div tw="absolute right-2.5 bottom-[-15px]">
        <div tw="flex space-x-1">
          {[...Array(1)].map((_, id) => (
            <Profile
              key={id}
              url={`https://api.lorem.space/image/face?w=300&h=300&c=${encodeURIComponent(
                title
              )}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const DutyView = () => {
  const { event } = useEvent()
  const time = useCurrentTime()

  return (
    <div tw="flex justify-center items-center min-h-screen font-semibold text-white text-center break-all bg-[#2C3D50]">
      <div tw="flex flex-col mx-auto w-full xs:max-w-lg px-4 sm:px-10 space-y-4">
        <Card tw="xs:text-xl sm:text-2xl font-light">
          <div tw="flex items-center justify-around px-3 py-2 bg-white rounded-t-lg">
            <div>{time}</div>

            <div>
              <span tw="text-xs xs:text-base sm:text-xl">คิว</span> 00
            </div>

            <div>
              <span tw="text-xs xs:text-base sm:text-xl">เหลือ</span> 00:00
            </div>
          </div>

          <div
            tw="bg-purple-300 w-full h-[6px] rounded-b-lg"
            style={{
              background: `linear-gradient(45deg, rgb(155, 89, 182) 10%, transparent)`,
            }}
          />
        </Card>

        <Card>
          <div tw="px-2 bg-white rounded-t-lg text-xl xs:text-2xl sm:text-3xl">
            <p tw="text-center my-2 xs:my-3 sm:my-4 font-semibold">
              พาน้องไปเล่นออลแคมป์
            </p>
          </div>

          <div tw="rounded-b-lg text-white px-2 py-2 text-xs xs:text-sm sm:text-base bg-transparent">
            ต่อไป รับน้องมาจากโรงแรม · ช่วง chaos
          </div>
        </Card>

        <div tw="py-1" />

        <div tw="flex flex-col space-y-8">
          <TaskCard title="สั่งข้าวเช้าให้สตาฟ" />
          <TaskCard title="ให้สตาฟที่ไม่ได้ on duty มาทานข้าว" />
        </div>

        <div tw="text-xs text-gray-300">{event?.name}</div>
      </div>
    </div>
  )
}
