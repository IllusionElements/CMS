/** @format */

import { Meteor } from 'meteor/meteor'

export default class MongoResolver {
  static async findCollection(name) {
    const { Mongo } = await import('meteor/mongo')
    const Collection = Mongo.Collection.get(name)
    return Collection.find({}).fetch()
  }

  constructor(dbName) {
    this.collection = () => MongoResolver.findCollection(dbName)
    this.schemaCollection = MongoResolver.findCollection('@@schemas')
  }

  async deleteDB(name) {
    const db = this.collection.rawDatabase()
    const removed = await db.dropCollection(name)
    return removed
  }

  createDB(name, schema) {
    if (this.Collection.name === name) {
      return false
    }

    return !!Meteor.registerCollection(name, schema)
  }

  insertDocument(name, doc) {
    return this.Collection(name).insert(JSON.parse(doc))
  }

  findDocument(query) {
    const $query = JSON.parse(query)
    const doc = this.Collection.find($query).fetch()
    return JSON.stringify(doc)
  }
}
