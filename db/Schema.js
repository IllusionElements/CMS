/** @format */

import SimpleSchema from 'simpl-schema'

const extend = (target, src) => Object.assign(target, src)
const Schema = {
  name: String,
  reason: String,
  'date.added': Date,
  'date.updated': Date,
}

const ClanSchema = extend(Schema, {
  clanTag: String,
})

export const BlacklistSchema = [
  new SimpleSchema(Schema),
  new SimpleSchema(ClanSchema),
]
