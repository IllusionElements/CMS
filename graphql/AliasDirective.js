/** @format */

import { SchemaDirectiveVisitor } from 'graphql-tools'

export class AliasFormatDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(fieldDef) {
    const { field } = this.args
    Object.assign(fieldDef, { resolve: ({ [field]: fieldName }) => fieldName })
  }
}
