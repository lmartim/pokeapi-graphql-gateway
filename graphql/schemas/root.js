import { gql } from 'apollo-server-express'

const Query = gql`
  type Query {
    pokemon(id: ID!): Pokemon
    pokemonList: [PokemonList]
  }
`

export const resolvers = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {
      let data = await dataSources.pokeApi.getPokemon(id)
      return data
    },
    pokemonList: async (_source, _args, { dataSources }) => {
      const data = await dataSources.pokeApi.getPokemonList()
      return data.results
    }
  }
}

export default Query