import type {MaybeAsync} from '../@types/IStore'

export const isPromise = <T>(data: MaybeAsync<T>): data is Promise<T> =>
  data && 'then' in data && typeof data.then === 'function'
