import { SchemaDirectiveVisitor } from '@graphql-tools/utils'
import { defaultFieldResolver, GraphQLField } from 'graphql'

/* Instruction for establishing a live connection that is updated once the underlying data changes. */
export class LiveDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args)

      console.log('directive added')

      return result
    }
  }
}
