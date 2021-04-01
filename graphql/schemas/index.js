import Query, { resolvers as rootResolvers } from './root'

import Pokemon from './pokemon'
import PokemonList from './pokemon-list'
import Moves from './moves'
import Move from './move'
import Types from './types'
import Type from './type'

export const resolvers = {
  ...rootResolvers
}

export default [
  Query,
  Pokemon,
  PokemonList,
  Moves,
  Move,
  Types,
  Type
]