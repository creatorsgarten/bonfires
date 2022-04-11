import tw from 'twin.macro'

import { useAtom } from 'jotai'
import { Dialog } from '@headlessui/react'

import { Avatar } from '../duty-card/AssigneeAvatar'
import { reassignDutyDialogOpen } from '../duty-card/duty-dialog.atom'

const mock = () =>
  [...Array(5)].map((_, id) => ({
    id: String(id),
    user: {
      id: String(id),
      displayName: 'Poom',
      photo: `https://i.pravatar.cc/1000?c=${id}`,
    },
  }))

const Button = tw.button`flex border-none px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white shadow-2xl relative cursor-pointer font-body text-center justify-center items-center`

export const ReassignDutyDialog = () => {
  const [isOpen, setOpen] = useAtom(reassignDutyDialogOpen)

  const close = () => setOpen(false)

  if (!isOpen) return null

  return (
    <Dialog
      tw="fixed inset-0 overflow-y-auto z-50"
      open={isOpen}
      onClose={close}
    >
      <div tw="flex flex-col min-h-screen items-center justify-center">
        <Dialog.Overlay
          tw="fixed inset-0 bg-black z-[-20] opacity-40"
          onClick={close}
        />

        <div tw="flex flex-col z-10 w-full max-w-md my-8 items-center justify-center px-4">
          <div tw="flex flex-col items-start justify-center bg-white shadow-xl rounded-t-2xl px-5 py-5 w-full space-y-4">
            <Dialog.Title tw="text-xl font-medium text-gray-900 m-0">
              เปลี่ยนคนรับงาน
            </Dialog.Title>

            <p tw="text-sm text-gray-500">คนรับงานที่ยังว่างอยู่ (5)</p>

            <div tw="flex flex-wrap space-x-2 items-center justify-center">
              {mock().map((a) => (
                <Avatar
                  key={a.id}
                  assignee={a}
                  tw="w-10 h-10 xs:w-14 xs:h-14 shadow-2xl border-gray-50 border-4 cursor-pointer"
                  onClick={close}
                />
              ))}
            </div>
          </div>

          <div tw="flex w-full rounded-b-2xl">
            <Button tw="font-bold w-full rounded-bl-2xl" onClick={close}>
              เลือก
            </Button>

            <Button
              tw="bg-blue-500 hover:bg-blue-600 w-full rounded-br-2xl"
              onClick={close}
            >
              เปิดรับงาน
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
