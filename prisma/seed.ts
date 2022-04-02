import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  const user = await db.user.upsert({
    where: { email: 'poom@hey.com' },
    update: {},
    create: {
      email: 'poom@hey.com',
      username: 'poom',
      displayName: 'Poom',
    },
  })

  const workspace = await db.workspace.upsert({
    where: { slug: 'polaryz' },
    update: {},
    create: {
      name: 'Polaryz',
      slug: 'polaryz',
      users: { connect: { id: user.id } },
    },
  })

  const event = await db.event.upsert({
    where: { slug: 'polaryz-camp' },
    update: {
      icon: 'dragon',
      color: '#a55eea',
    },
    create: {
      name: 'Polaryz Camp',
      slug: 'polaryz-camp',
      workspaceId: workspace.id,

      staffs: { create: { userId: user.id } },
    },
    include: { staffs: true },
  })

  const [{ id: staffId }] = event.staffs ?? []

  const staff = await db.staff.update({
    where: { id: staffId },
    data: {
      roles: {
        create: {
          type: 'Manager',
          title: 'MC Food',
          squad: { create: { title: 'Food' } },
        },
      },
    },
    include: { roles: { include: { squad: true } } },
  })

  const [{ id: managerId }] = staff.roles ?? []

  await db.day.upsert({
    where: { id: 1 },
    update: {
      duties: {
        createMany: {
          data: [
            {
              id: 1,
              managerId,
              title: 'สั่งข้าวเช้าให้สตาฟ',
              slot: 0,
            },
            {
              id: 2,
              managerId,
              title: 'ให้สตาฟที่ไม่ได้ on duty มาทานข้าว',
              slot: 3,
            },
          ],
        },
      },
    },

    create: {
      id: 1,

      title: 'Day 1',
      startsAt: new Date(),
      eventId: event.id,

      // Assign the user as OD for this day.
      // Usually the OD should not also be MC for conflicting events.
      directors: { connect: { id: user.id } },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
