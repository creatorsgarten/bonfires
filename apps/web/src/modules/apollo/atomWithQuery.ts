import {
  ApolloClient,
  OperationVariables,
  ApolloQueryResult,
  QueryOptions,
} from '@apollo/client'

import { atom, Getter, PrimitiveAtom, WritableAtom } from 'jotai'

import { apolloAtom } from './apolloAtom'

type QueryArgs<
  Variables extends object = OperationVariables,
  Data = any
> = QueryOptions<Variables, Data> & {
  pause?: boolean
}

type AtomWithQueryAction<
  Variables extends object = OperationVariables,
  Data = any
> = {
  type: 'reexecute'
  opts?: Omit<QueryArgs<Variables, Data>, 'query'>
}

export function atomWithQuery<
  Data = any,
  Variables extends object = OperationVariables
>(
  createQueryArgs: (get: Getter) => QueryArgs<Variables, Data>,
  getClient?: (get: Getter) => ApolloClient<unknown>
): WritableAtom<ApolloQueryResult<Data>, AtomWithQueryAction>

export function atomWithQuery<
  Data = any,
  Variables extends object = OperationVariables
>(
  createQueryArgs: (get: Getter) => QueryArgs<Variables, Data>,
  getClient: (get: Getter) => ApolloClient<unknown> = (get) => get(apolloAtom)
) {
  type ResultAtom = PrimitiveAtom<
    ApolloQueryResult<Data> | Promise<ApolloQueryResult<Data>>
  >

  const refAtom = atom(() => ({} as { resultAtom?: ResultAtom }))

  const createResultAtom = (
    ref: { resultAtom?: ResultAtom },
    client: ApolloClient<unknown>,
    args: QueryArgs<Variables, Data>,
    opts?: AtomWithQueryAction<Variables, Data>['opts']
  ) => {
    let resolve: ((result: ApolloQueryResult<Data>) => void) | null = null
    const resultAtom: ResultAtom = atom<
      ApolloQueryResult<Data> | Promise<ApolloQueryResult<Data>>
    >(
      new Promise<ApolloQueryResult<Data>>((r) => {
        resolve = r
      })
    )
    ref.resultAtom = resultAtom // FIXME this is too hacky, may not work in some edge cases
    let setResult: (result: ApolloQueryResult<Data>) => void = () => {
      throw new Error('setting result without mount')
    }
    const listener = (result: ApolloQueryResult<Data>) => {
      if (resultAtom !== ref.resultAtom) {
        // New subscription is working, ignoring old one
        return
      }
      if (!('data' in result)) {
        throw new Error('result does not have data')
      }
      if (resolve) {
        resolve(result)
        resolve = null
      } else {
        setResult(result)
      }
    }
    client
      .query({ ...args, ...opts })
      .then(listener)
      .catch(() => {
        // TODO error handling
      })

    resultAtom.onMount = (update) => {
      setResult = update

      client
        .query(args)
        .then(async (value) => {
          await new Promise((resolve) => setTimeout(resolve, 0))
          return value
        })
        .then(listener)
        .catch(() => {
          // TODO error handling
        })
      return
    }
    return resultAtom
  }

  const queryResultAtom = atom((get) => {
    const args = createQueryArgs(get)
    if ((args as { pause?: boolean }).pause) {
      return null
    }
    const client = getClient(get)
    const resultAtom = createResultAtom(get(refAtom), client, args)
    return { resultAtom, client, args }
  })

  const overwrittenResultAtom = atom<{
    oldResultAtom: ResultAtom
    newResultAtom: ResultAtom
  } | null>(null)
  const queryAtom = atom(
    (get) => {
      const queryResult = get(queryResultAtom)
      if (!queryResult) {
        return null
      }
      let { resultAtom } = queryResult
      const overwrittenResult = get(overwrittenResultAtom)
      if (overwrittenResult && overwrittenResult.oldResultAtom === resultAtom) {
        resultAtom = overwrittenResult.newResultAtom
      }
      return get(resultAtom)
    },
    (get, set, action: AtomWithQueryAction<Variables, Data>) => {
      switch (action.type) {
        case 'reexecute': {
          const queryResult = get(queryResultAtom)
          if (!queryResult) {
            throw new Error('query is paused')
          }
          const { resultAtom, client, args } = queryResult
          set(overwrittenResultAtom, {
            oldResultAtom: resultAtom,
            newResultAtom: createResultAtom(
              get(refAtom),
              client,
              args,
              action.opts
            ),
          })
        }
      }
    }
  )

  return queryAtom
}
