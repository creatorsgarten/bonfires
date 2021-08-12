export type ModuleMeta = {id: string; title: string}

export const meta = <T extends string>(
  id: T,
  options: Omit<ModuleMeta, 'id'>
): ModuleMeta => ({...options, id})
