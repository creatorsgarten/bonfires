import {Registry} from '@eventkit/core'
import {Agenda} from '@eventkit/modules'

describe('Module Events', () => {
  it('can dispatch module events', () => {
    const r = Registry.create().use(Agenda)
    // const agenda = r.get('eventkit/agenda')

    // agenda.run('', {title: 'Hello', start: new Date()})
  })
})
