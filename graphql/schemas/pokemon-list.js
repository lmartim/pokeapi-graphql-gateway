import { gql } from 'apollo-server-express'

const PokemonList = gql`
  type PokemonList {
    name: String
    url: String
  }
`

export default PokemonList
