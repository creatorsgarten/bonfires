import {IExtension} from '@eventkit/core'

export function Notion(): IExtension {
  return {
    id: 'com.heypoom.notion-template',
    title: 'Notion Template',
    on: {
      setup() {},

      draft: async (event) => {},
    },
  }
}
