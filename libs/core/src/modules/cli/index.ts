import { Command } from 'commander'
import inquirer from 'inquirer'

import { Event, EventType } from '@eventkit/core'

// eventkit new meetup --title "GraphQL Meetup 10.0" --online --stream=streamyard,youtube --date "19 Aug - 20 Aug" --time "7PM - 9PM"

const program = new Command()

program
  .command('new [event-type]')
  .description('create a new event')
  .action(onCreateEvent)

program
  .option('--title <title>', 'title of the event')
  .option('--online', 'will this event be held virtually?')
  .option('--date <when>', 'date of the event')
  .option('--livestream <services>', 'which services to livestream to?')
  .option('--time <when>', 'time of the event')
  .option('-y, --yes', 'always answer yes to all prompts')

program.parse(process.argv)

interface ICreateEventFlags {
  title: string
  online: boolean
  livestream: string
  date: string
  time?: string
  yes: boolean
  type?: EventType
}

type IProgramOptions = Omit<ICreateEventFlags, 'type'>
type ICreateEventAnswer = Omit<ICreateEventFlags, 'yes'>

async function onCreateEvent(type: EventType) {
  const options = program.opts<IProgramOptions>()

  let answer: Partial<ICreateEventAnswer> = {}

  if (!options.yes) {
    answer = await inquirer.prompt([
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
  }

  const event = Event.create({
    title: answer.title ?? options.title,
    type: answer.type ?? type ?? 'event',
    isOnline: answer.online ?? options.online ?? false,
    datetime: { start: new Date(), end: new Date() },
  })
}
