module.exports = {
  client: {
    includes: [
      './apps/web/src/**/*.gql',
      './apps/web/src/**/*.ts',
      './apps/web/src/**/*.ts',
    ],
    excludes: ['**/__tests__/**'],
    service: {
      name: 'eventkit',
      url: 'http://localhost:3333/api/graphql',
      skipSSLValidation: true,
    },
    tagName: 'gql',
    addTypeName: true,
  },
}
