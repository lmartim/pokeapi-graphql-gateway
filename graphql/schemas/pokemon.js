import { gql } from 'apollo-server-express'

const Pokemon = gql`
  type Pokemon {
    id: ID!
    name: String
    moves: [Moves]
    types: [Types]
    height: Int
  }
`

export default Pokemon
