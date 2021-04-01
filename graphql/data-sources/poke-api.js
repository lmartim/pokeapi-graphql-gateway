import { RESTDataSource } from 'apollo-datasource-rest'

export default class PokeApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemonList(limit = 16) {
    return this.get(`pokemon/?limit=${limit}`)
  }

  async getPokemon(pokemon) {
    return this.get(`pokemon/${pokemon}`)
  }
}