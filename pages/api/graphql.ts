import 'reflect-metadata'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-micro'
import {
  ObjectType,
  ID,
  buildSchemaSync,
  Resolver,
  Query,
  Field,
} from 'type-graphql'

const prisma = new PrismaClient()
@ObjectType()
class User {
  @Field(() => ID)
  id: number

  // Doc: Field 修饰函数里必须声明返回的类型，不然报错，官方文档里的代码有问题 
  @Field(() => String) 
  name: string
}

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
}

const schema = buildSchemaSync({ resolvers: [UserResolver] })

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
