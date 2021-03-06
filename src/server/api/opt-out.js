import { mapFieldsToModel } from './lib/utils'
import { OptOut } from '../models'

export const schema = `
  type OptOut {
    id: ID
    cell: String
    assignment: Assignment
    createdAt: Date
  }
`

export const resolvers = {
  OptOut: {
    ...mapFieldsToModel([
      'id',
      'cell',
      'createdAt'
    ], OptOut),
    assignment: async (optOut, _, { loaders }) => loaders.assignment.load(optOut.assignment_id)
  }
}
