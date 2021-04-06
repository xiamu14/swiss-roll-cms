import { ApolloServer } from 'apollo-server'
import { ctx } from './context'
import { schema } from './schema'

const server = new ApolloServer({
  schema,
  context: ctx,
})

server.listen({ port: 3000 }).then(async ({ url }) => {
  console.log(`\
  🚀 Server ready at: ${url}
  ⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
    `)
})
