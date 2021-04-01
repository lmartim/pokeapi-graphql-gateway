import { gql } from 'apollo-server-express'

const Types = gql`
  type Types {
    type: Type
    slot: Int
  }
`

export default Types
