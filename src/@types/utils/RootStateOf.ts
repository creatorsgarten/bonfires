import {Extension} from '@eventkit/core'

type TupleToObject<T extends [string, any]> = {
  [key in T[0]]: Extract<T, [key, any]>[1]
}

type StatePairOf<T> = {
  [P in keyof T]: T[P] extends Extension ? [T[P]['id'], T[P]['data']] : never
}

export type RootStateOf<T extends any[]> = TupleToObject<StatePairOf<T>[number]>
