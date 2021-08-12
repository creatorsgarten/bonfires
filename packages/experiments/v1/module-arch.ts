import {Constructor, UnionToIntersection} from 'type-fest'

// export type Constructor<T> = new (...args: any[]) => T

type AnyFunction = (...args: any) => any

export type ReturnTypeOf<T extends AnyFunction | AnyFunction[]> =
  T extends AnyFunction
    ? ReturnType<T>
    : T extends AnyFunction[]
    ? // exclude `void` from intersection, see octokit/octokit.js#2115
      UnionToIntersection<Exclude<ReturnType<T[number]>, void>>
    : never

export class EventKit {
  static modules: EventKitModule[] = []

  static module<
    S extends Constructor<any> & {modules: any[]},
    T extends EventKitModule[]
  >(this: S, ...nextModules: T) {
    const currentModules = this.modules

    const NewEvent = class extends this {
      static modules = [
        ...currentModules,
        ...nextModules.filter((module) => !currentModules.includes(module)),
      ]
    }

    return NewEvent as typeof this &
      Constructor<UnionToIntersection<ReturnTypeOf<T>>>
  }

  constructor() {
    const constructor = this.constructor as typeof EventKit

    constructor.modules.forEach((module) => {
      Object.assign(this, module(this))
    })
  }
}

type EventKitModule = <T extends any>(event: EventKit) => T

// const plugin: EventKitModule = (event) => ({
//   bruh: 1,
// })

// const Event = EventKit.module(plugin)
// const event = new Event()
// event //?
