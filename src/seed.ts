import { prisma } from './context'

async function seed() {
  await prisma.user.create({
    data: {
      name: 'Lily',
      email: 'Lily@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

seed()
