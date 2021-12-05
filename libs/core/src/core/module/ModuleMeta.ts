export type IModuleMeta<T extends string> = { id: T; title: string }

export const Meta = <T extends string>(
  id: T,
  options: Omit<IModuleMeta<T>, 'id'>
): IModuleMeta<T> => ({ ...options, id })
