/** @format */

import { GraphQLObjectType } from 'graphql'
import { Mongo } from 'meteor/mongo'

declare module 'meteor/mongo' {
  type Config = {
    embody?: (getArgs: () => any, body: any) => any
    $filters?: Mongo.Modifier<any>
    $options?: any
    maxDepth?: number
    maxLimit?: number
    deny?: string[]
    intersect?: object
  }
  namespace Mongo {
    interface Collection<T> {
      astToQuery(ast: GraphQLObjectType, query?: Config)
    }
  }
}
