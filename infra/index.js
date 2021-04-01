import express from 'express'

const port = process.env.PORT || 3000

const createServer = () => {
  const server = express()
  server.set('port', port)

  return server
}

export default createServer