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
    update: {},
    create: {
      name: 'Polaryz Camp',
      slug: 'polaryz-camp',
      workspaceId: workspace.id,

      staffs: { create: { userId: user.id } },
    },
    include: { staffs: true },
  })

  const [{ id: staffId }] = event.staffs

  const staff = await db.staff.update({
    where: { id: staffId },
    data: {
      roles: {
        create: {
          type: 'Manager',
          title: 'OD',
          squad: { create: { title: 'Admin' } },
        },
      },
    },
    include: { roles: { include: { squad: true } } },
  })

  // Check if there's any existing "Day 1"
  const day = await db.day.findFirst({ where: { title: 'Day 1' } })

  // If there isn't, we create one.
  if (!day) {
    await db.day.create({
      data: {
        title: 'Day 1',
        startsAt: new Date(),
        eventId: event.id,

        // Assign the user as OD for this day.
        directors: { connect: { id: user.id } },
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
