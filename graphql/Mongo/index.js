/** @format */

// import { load } from 'graphql-load'
// import MongoMutation from './Mongo.resolver'

// const resolver = {
//   Mutation: ({ name }) => new MongoMutation(name)
// }

import { Meteor } from 'meteor/meteor'
import { MongoInternals } from 'meteor/mongo'

const { mongo } = MongoInternals.defaultRemoteCollectionDriver()

Meteor.db = mongo.db

class MongoManager {
  constructor(db) {
    this.db = db
  }

  async createCollection(name) {
    const collection = await this.db.createCollection(name)
    return !!collection
  }

  async removeCollection(name) {
    const dropped = await this.db.drop()
    return dropped
  }
}
const resolver = {
  Query: {
    allDB: () => {
      const collections = Mongo.Collection.getAll()
      const cols = collections.map(({ instance, name }) => ({
        name,
        total: instance.find({}).count(),
      }))
      return cols
    },
  },
}
