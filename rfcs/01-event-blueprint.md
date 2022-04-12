# RFC 1: Event Blueprint

### Creating event blueprints

```ts
import { Blueprint, Tasks, Day, session, manager } from '@eventkit/blueprint'

import { DiscordPlugin } from '@eventkit/discord'
import { EventpopPlugin } from '@eventkit/eventpop'

const managers = {
  director: director('OD'),
  food: manager('MC Food'),
  snacks: manager('MC Snacks'),
  media: manager('MC Media'),
}

const tasks = {
  media: Tasks.for(managers.media)
    .pre('หากล้องถ่ายรูป', { weeks: 1 })
    .post('ตัดต่อรูป', { days: 1 })
    .post('เอารูปลงเพจ', { days: 2 }),
}

const agenda = [
  session('08:30', 'Registration starts'),
  session('09:30', 'Welcome'),
  session('10:00', 'Keynote'),
]

const day = Day.create().title('Day 1').roles(managers).agenda(agenda)

export const StupidHackathonBlueprint = Blueprint.create()
  .title('The Stupid Hackathon Bangkok 7')
  .days([day])
  .attendees(50, 70, { overbook: 15 })
  .venue({ outdoor: true, projector: true, outlets: true })
  .food({ meals: { catering: 2, buffet: 1 } })
  .roles(managers)
  .tasks(tasks)
  .use(EventpopPlugin, { qr: true, theme: 'stupidhack.css' })
  .use(DiscordPlugin)

// Export as JSON configuration (to pass to the EventKit API)
hackathon.toJSON()
```

### Using event blueprints

```ts
import { StupidHackathonBlueprint } from '@eventkit/stupid-hackathon'
```
