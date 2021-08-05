import {Command} from 'commander'
import inquirer from 'inquirer'

import {Event, IEventType} from '@eventkit/core'

// eventkit new meetup --title "GraphQL Meetup 10.0" --online --stream=streamyard,youtube --date "19 Aug - 20 Aug" --time "7PM - 9PM"

const program = new Command()

program
  .command('new <event-type>')
  .description('create a new event')
  .action(createEvent)

program
  .option('--title <title>', 'title of the event')
  .option('--online', 'will this event be held virtually?')
  .option('--date <when>', 'date of the event')
  .option('--livestream <services>', 'which services to livestream to?')
  .option('--time <when>', 'time of the event')
  .option('-y, --yes', 'always answer yes to all prompts')

program.parse(process.argv)

interface ICreateEventOptions {
  title: string
  online: boolean
  livestream: string
  date: string
  time?: string
  yes: boolean
}

async function createEvent(type: IEventType) {
  const options = program.opts<ICreateEventOptions>()

  if (!options.yes) {
    const ans = await inquirer.prompt({
      type: 'confirm',
      name: 'confirmCreate',
      default: false,
      message: 'Would you like to do create the draft event now?',
    })

    if (!ans.confirmCreate) return
  }

  const event = new Event({
    title: options.title,
    type,
    when: options.date,
    online: options.online ?? false,
  })

  console.log(event)
}
