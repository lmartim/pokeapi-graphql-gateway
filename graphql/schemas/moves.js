import { gql } from 'apollo-server-express'

const Moves = gql`
  type Moves {
    move: Move
  }
`

export default Moves
