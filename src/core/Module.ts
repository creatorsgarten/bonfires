import {IModule} from '../@types'

export const createModule =
  <S, E>() =>
  <ID extends string, Deps extends readonly IModule<any, any, any>[] = any>(
    id: ID,
    options: Omit<IModule<S, E, ID, Deps>, 'id'> = {}
  ): IModule<S, E, ID, Deps> => {
    return {id, ...options}
  }
