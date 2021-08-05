import {IExtension} from '@eventkit/core'

export function Notion(): IExtension {
  return {
    name: 'Notion',
    enabled: true,
    on: {
      setup() {},

      draft: async (event) => {
        console.log(event.extension)
      },
    },
  }
}
