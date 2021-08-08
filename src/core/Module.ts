import {IModule} from '../@types'

export const createModule =
  <S, E>() =>
  <ID extends string>(
    id: ID,
    options: Omit<IModule<S, E, ID>, 'id'> = {}
  ): IModule<S, E, ID> => {
    return {id, ...options}
  }
