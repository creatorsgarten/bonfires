import {Registry} from '@eventkit/core'
import {Notion} from '@eventkit/modules'

require('dotenv').config()

const r = Registry.create().use(Notion)

async function main() {
  const users = await r.get('eventkit/notion').users()

  for (const user of users) {
    if (user.type === 'person') {
      console.log(`User> ${user.name} <${user.person?.email}> * ${user.id}`)
    }

    if (user.type === 'bot') {
      console.log(`Bot> ${user.name} * ${user.id}`)
    }
  }
}

main()
