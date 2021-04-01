import setupGraphql from './graphql'
import createServer from './infra'

const server = createServer()
setupGraphql(server)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Go to http://localhost:${port}/graphql to run queries`)
})