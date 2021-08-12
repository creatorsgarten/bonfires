import {Command} from 'commander'
import inquirer from 'inquirer'

import {IEventType} from '../../src/@types/IEvent'

// eventkit new meetup --title "GraphQL Meetup 10.0" --online --stream=streamyard,youtube --date "19 Aug - 20 Aug" --time "7PM - 9PM"

const program = new Command()

program
  .command('new [event-type]')
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
  type?: IEventType
}

async function createEvent(type: IEventType) {
  const options = program.opts<ICreateEventOptions>()

  let result: Partial<ICreateEventOptions> = {}

  if (!options.yes) {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        when: !options.title,
        message: 'What is the name of the event?',
      },

      {
        type: 'list',
        name: 'type',
        when: !type,
        message: 'What kind of event is this?',
        choices: ['conference', 'meetup', 'hackathon', 'bootcamp', 'event'],
      },

      {
        type: 'input',
        name: 'date',
        when: !options.date,
        message: 'When is the event date?',
      },

      {
        type: 'confirm',
        default: true,
        name: 'online',
        when: typeof options.online !== 'boolean',
        message: 'Will this event be hosted online?',
      },
    ])

    result = answer

    const verify = await inquirer.prompt({
      type: 'confirm',
      name: 'confirmCreate',
      default: true,
      message: 'Would you like to do create the draft event now?',
    })

    if (!verify.confirmCreate) return
  }

  console.log(result)
}
