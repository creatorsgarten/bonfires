export type ModuleMeta<T extends string> = {id: T; title: string}

export const meta = <T extends string>(
  id: T,
  options: Omit<ModuleMeta<T>, 'id'>
): ModuleMeta<T> => ({...options, id})
