import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(
  process.env.ENV_API ?? 'http://localhost:1337/graphql'
)
