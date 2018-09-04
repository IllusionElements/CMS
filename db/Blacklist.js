/** @format */

import { Mongo } from 'meteor/mongo'

export const Blacklist = Schema => {
  class Collections {
    static members = new Mongo.Collection('blacklist.members')

    static clans = new Mongo.Collection('blacklist.clans')

    static get [Symbol.iterator]() {
      const self = this
      return function* it() {
        yield self.members
        yield self.clans
      }
    }
  }

  Collections.forEach((collection, i) => collection.attachSchema(Schema[i]))

  return Collections
}
