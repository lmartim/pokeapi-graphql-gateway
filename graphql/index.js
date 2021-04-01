import { ApolloServer } from 'apollo-server-express'

import typeDefs, { resolvers } from './schemas'
import dataSources from './data-sources'

export default (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
  })

  server.applyMiddleware({ app })

}
