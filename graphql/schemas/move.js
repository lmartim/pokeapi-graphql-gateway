import { gql } from 'apollo-server-express'

const Move = gql`
  type Move {
    name: String
    url: String
  }
`

export default Move
