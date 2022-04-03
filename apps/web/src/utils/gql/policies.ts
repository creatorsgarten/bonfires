import { FieldReadFunction, FieldPolicy } from '@apollo/client'

const ref =
  (type: string): FieldReadFunction =>
  (_, { args, toReference }) =>
    toReference({ __typename: type, id: args?.id })

const read = (type: string): FieldPolicy => ({ read: ref(type) })

export const typePolicies = {
  Query: {
    fields: {
      event: read('Event'),
      workspace: read('Workspace'),
    },
  },
}
