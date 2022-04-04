export type Single<T> = T extends Array<infer I> ? I : never
