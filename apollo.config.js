module.exports = {
  client: {
    includes: ['./apps/web/src/**/*.gql', './libs/core/src/**/*.gql'],
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
