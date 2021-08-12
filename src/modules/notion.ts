import {CombineModule, IModule, ModuleFn} from "@eventkit/core"
import {StateOf, EventsOf, IStore} from "src/@types"
import {ExtractModules} from "src/@types/IModule"
import {ConditionalExcept} from "type-fest"

import {EventModule, IEventModule} from "./event"

interface INotionState {
  token: string
}

interface INotionEvents {
  createPage: "42"
}

interface IAgendaState {
  time: Date
}
interface IAgendaEvents {
  add: number
}

type IAgendaModule = IModule<IAgendaState, IAgendaEvents, "agenda">
type INotionModule = IModule<INotionState, INotionEvents, "notion">

const TextEngine = createModule({
  uses: [TemplateEngine]
})

const TemplateEngine = createModule({
  uses: [TextEngine]
})

export const NotionModule: ModuleFn<
  [IEventModule, IAgendaModule, INotionModule]
> = (store) => {
  const {on} = store

  on("event/live", (state) => state)
  on("agenda/add", (state) => state)
  on("notion/createPage", (state) => state)
}

// filter dispatch and state by model

type M = [typeof NotionModule, typeof EventModule]
type EM = ExtractModules<M>
type R = CombineModule<ExtractModules<M>>
type S = StateOf<R>
type E = EventsOf<R>
type Store = IStore<S, E>

type ConcatX<T extends readonly (readonly any[])[]> = [
  ...T[0],
  ...T[1],
  ...T[2],
  ...T[3],
  ...T[4],
  ...T[5],
  ...T[6],
  ...T[7],
  ...T[8],
  ...T[9],
  ...T[10],
  ...T[11],
  ...T[12],
  ...T[13],
  ...T[14],
  ...T[15],
  ...T[16],
  ...T[17],
  ...T[18],
  ...T[19]
]

type Flatten<T extends readonly any[]> = ConcatX<
  [...{[K in keyof T]: T[K] extends any[] ? T[K] : [T[K]]}, ...[][]]
>

// type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type Result = {
  [K in keyof M]: M[K]
}

type MN = M[number]

//  extends ModuleFn<infer P> ? P : never

type Tup = ["A", "B"]

type TupResult = ConditionalExcept<
  {
    [Index in keyof M]: Index extends string
      ? M[Index] extends M[number]
        ? "yes"
        : never
      : never
  },
  "never"
>

type Bar = {
  A: "ok"
  B: "no"
}

type WorkingBaz = {
  [K in Exclude<keyof Tup, keyof any[]>]: Tup[K] extends keyof Bar
    ? Bar[Tup[K]]
    : never
} & {length: Tup["length"]} & any[]

type PsTup = {"0": 1; "1": 2; length: 2}

type Result2 = Flatten<[Result[0], Result[1]]>
