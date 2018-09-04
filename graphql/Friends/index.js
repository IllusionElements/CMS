/** @format */

import resolver from './resolver'
import XboxService from '../../server/XboxService'
import Schema from './Schema.gql'
import Query from './Query.gql'

const typeDefs = [Schema, Query]

export const Friends = {
  typeDefs,
  resolvers: [resolver(XboxService)],
}
