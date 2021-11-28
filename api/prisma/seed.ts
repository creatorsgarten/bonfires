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
    where: { slug: 'polaris' },
    update: {},
    create: {
      name: 'Polaris Club',
      slug: 'polaris',
      users: { connect: { id: user.id } },
    },
  })

  const event = await db.event.upsert({
    where: { slug: 'code-in-the-dark' },
    update: {},
    create: {
      name: 'Code in the Dark',
      slug: 'code-in-the-dark',
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
          type: 'OD',
          title: 'OD',
          squad: { create: { title: 'Admin' } },
        },
      },
    },
    include: { roles: { include: { squad: true } } },
  })

  const [{ squadId }] = staff.roles

  // Check if there's any existing "Day 0"
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

        duties: {
          create: {
            title: 'Do stuff',
            startSlot: 5,
            endSlot: 15,
            squadId,
          },
        },
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
