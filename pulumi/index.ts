import * as gcp from '@pulumi/gcp'
import { Config } from '@pulumi/pulumi'

const { cloudrun, projects } = gcp

const config = new Config()

const REDIS_URL = config.require('REDIS_URL')
const DATABASE_URL = config.require('DATABASE_URL')

const location = gcp.config.region ?? 'asia-southeast1-a'

const image =
  'asia-southeast1-docker.pkg.dev/eventkit-dev/eventkit/eventkit-api'

const envs = [
  { name: 'DATABASE_URL', value: DATABASE_URL },
  { name: 'REDIS_URL', value: REDIS_URL },
]

const enableCloudRun = new projects.Service('EnableCloudRun', {
  service: 'run.googleapis.com',
})

const apiConfig: gcp.cloudrun.ServiceArgs = {
  location,

  template: {
    spec: {
      containers: [
        {
          envs,
          image,
          ports: [{ containerPort: 3333 }],
        },
      ],
    },
  },

  traffics: [{ latestRevision: true, percent: 100 }],
}

const apiService = new cloudrun.Service('eventkit-api', apiConfig, {
  dependsOn: enableCloudRun,
})

const apiIam = new cloudrun.IamMember('hello-everyone', {
  service: apiService.name,
  location,
  role: 'roles/run.invoker',
  member: 'allUsers',
})

export const apiUrl = apiService.statuses[0].url
