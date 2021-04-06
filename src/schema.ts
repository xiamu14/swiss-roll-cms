import { prisma } from './context'
import { gql } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import {
  typeDefs as scalarsTypeDefs,
  resolvers as scalarsResolvers,
} from 'graphql-scalars'

const typeDefs = gql`
  type Post {
    id: Int
    createdAt: DateTime
    updatedAt: DateTime
    title: String
    content: String
    author: User
    authorId: Int
  }
  type User {
    id: Int
    email: String
    name: String
    posts: [Post]
  }

  type Query {
    posts: [Post]
  }
`

const resolvers = {
  Query: {
    posts: async () => await prisma.post.findMany(),
  },
}

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, ...scalarsTypeDefs],
  resolvers: {
    ...resolvers,
    ...scalarsResolvers,
  },
})
