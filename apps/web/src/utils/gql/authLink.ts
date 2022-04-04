import { setContext } from '@apollo/client/link/context'

export const createAuthLink = () => {
  return setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
      headers: {
        ...headers,
        ...(token && { authorization: `Bearer ${token}` }),
      },
    }
  })
}
