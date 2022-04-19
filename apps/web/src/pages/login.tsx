import tw from 'twin.macro'

import { useForm } from 'react-hook-form'

import {
  useLoginWithEmailMutation,
  LoginWithEmailMutationVariables,
} from '@gql'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Input = tw.input`flex border-none rounded-lg h-full text-lg appearance-none overflow-visible bg-transparent text-white w-full placeholder:text-gray-100 font-thin py-3 px-5 bg-[#222]`

const css = {
  fontFamily: 'Inter',
  '&:focus': { outline: '2px solid #7bed9f' },
}

type Form = LoginWithEmailMutationVariables

const errProps = { style: { outline: '2px solid #ef4446' } }

const Login = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const [authError, setError] = useState<string | null>(null)

  const [login, result] = useLoginWithEmailMutation()

  const onSubmit = async (form: Form) => {
    try {
      const { data } = await login({ variables: form })

      const { token } = data?.loginWithEmail ?? {}
      if (!token) return

      setError(null)
      localStorage.setItem('token', token)

      router.push('/')
    } catch (err) {
      setError('Login information is not correct.')
    }
  }

  return (
    <div tw="flex items-center justify-center min-h-screen bg-[#111]">
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <div tw="flex flex-col mx-auto max-w-lg p-8 rounded-lg space-y-5">
          {authError && (
            <div tw="bg-red-500 text-gray-50 px-4 py-3">{authError}</div>
          )}

          <Input
            css={css}
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
            {...(errors.email && errProps)}
          />

          <Input
            css={css}
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            {...(errors.password && errProps)}
          />

          <button
            type="submit"
            tw="bg-green-500 hover:bg-green-600 text-white text-xl appearance-none rounded-lg py-2 border-none cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
