import { gql } from 'apollo-server-express'

const Type = gql`
  type Type {
    name: String
    url: String
  }
`

export default Type
