import type { Config } from '@jest/types'

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = async (): Promise<Config.InitialOptions> => {
  return {
    displayName: 'web',
    preset: '../../jest.preset.js',
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    },
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]s$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/apps/web',
  }
}

export default config
