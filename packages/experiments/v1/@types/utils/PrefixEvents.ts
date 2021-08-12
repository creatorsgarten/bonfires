export type PrefixWithKey<T, K extends string> = {
  [P in keyof T as `${K}/${P extends string ? P : never}`]: T[P]
}

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type PrefixEvents<
  U,
  R = {[K in keyof U]: K extends string ? PrefixWithKey<U[K], K> : never}
> = UnionToIntersection<R[keyof R]>
