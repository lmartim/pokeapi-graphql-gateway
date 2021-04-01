import setupGraphql from './graphql'
import createServer from './infra'

const server = createServer()
setupGraphql(server)

const port = process.env.PORT || 3000

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});