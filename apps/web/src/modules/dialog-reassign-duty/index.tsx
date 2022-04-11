import tw from 'twin.macro'

import { useAtom } from 'jotai'
import { Dialog } from '@headlessui/react'

import { Avatar } from '../duty-card/AssigneeAvatar'
import {
  reassignDutyDialogOpen,
  selectedDutyAssigneeAtom,
} from '../duty-card/duty-dialog.atom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo } from 'react'

const mock = () =>
  [...Array(5)].map((_, id) => ({
    id: String(id),
    user: {
      id: String(id),
      displayName: 'Poom',
      photo: `https://i.pravatar.cc/1000?c=${id}`,
    },
  }))

const Button = tw.button`flex border-none px-3 py-2 bg-gray-800 text-white shadow-2xl relative cursor-pointer font-body text-center justify-center items-center`

export const ReassignDutyDialog = () => {
  const [isOpen, setOpen] = useAtom(reassignDutyDialogOpen)

  const [selected, setSelected] = useAtom(selectedDutyAssigneeAtom)

  const hasSelection = useMemo(() => {
    return Object.values(selected).filter((x) => x).length > 0
  }, [selected])

  const close = () => setOpen(false)

  const select = (id: string) =>
    setSelected({ ...selected, [id]: !selected[id] })

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
                <div key={a.id} tw="relative" onClick={() => select(a.id)}>
                  <Avatar
                    assignee={a}
                    tw="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 shadow-2xl border-gray-50 border-4 cursor-pointer"
                  />

                  {selected?.[a.id] && (
                    <div tw="bg-purple-500 border-purple-900 border-4 border-solid absolute w-full h-full top-0 left-0 rounded-full flex items-center justify-center opacity-90">
                      <FontAwesomeIcon
                        icon="check"
                        tw="text-white xs:text-3xl"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!hasSelection && (
              <p tw="text-xs text-gray-500">
                คุณสามารถกดที่รูปเพิ่มเลือกสตาฟที่จะให้มารับงานได้
                หรือสามารถกดเปิดรับงานเพื่อประกาศหาคนมารับงาน
              </p>
            )}
          </div>

          <div tw="flex w-full rounded-b-2xl">
            {hasSelection ? (
              <Button
                tw="font-bold w-full rounded-bl-2xl bg-purple-500 hover:bg-purple-600"
                onClick={close}
              >
                เลือกสตาฟ
              </Button>
            ) : (
              <Button
                tw="font-bold w-full rounded-bl-2xl bg-blue-500 hover:bg-blue-600"
                onClick={close}
              >
                เปิดรับงาน
              </Button>
            )}

            <Button
              tw="bg-gray-600 hover:bg-gray-700 w-full rounded-br-2xl"
              onClick={close}
              {...(!hasSelection && { tw: 'bg-red-500' })}
            >
              ปิด
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
