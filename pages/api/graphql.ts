import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-micro'
import {
  queryType,
  objectType,
  makeSchema,
  mutationField,
  nonNull,
  stringArg,
} from '@nexus/schema'

const prisma = new PrismaClient()

const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('name')
  },
})
const Query = queryType({
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      description: '查询所有的用户',
      resolve: async () => await prisma.user.findMany(),
    })
  },
})

const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    name: nonNull(stringArg()),
  },
  async resolve(_, args) {
    const user = await prisma.user.create({ data: { name: args.name } })
    return user
  },
})

const schema = makeSchema({
  types: [User, Query, createUser],
})

const server = new ApolloServer({
  schema,
})

export const config = {
  api: {
    bodyParser: false,
  },
}
export default server.createHandler({
  path: '/api/graphql',
})
