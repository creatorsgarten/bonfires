import tw from 'twin.macro'

import { useForm } from 'react-hook-form'
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  useCreateUserMutation,
  useLoginWithEmailMutation,
  UserCreateInput,
} from '@gql'

import { routes } from '../utils/routes.constants'

const Input = tw.input`flex border-none rounded-lg h-full text-lg appearance-none overflow-visible bg-transparent text-white w-full placeholder:text-gray-100 font-thin py-3 px-5 bg-[#222]`
const Button = tw.button`bg-green-500 hover:bg-green-600 text-white text-xl appearance-none rounded-lg py-2 border-none cursor-pointer`

const css = {
  fontFamily: 'Inter',
  '&:focus': { outline: '2px solid #7bed9f' },
}

type Form = Pick<
  UserCreateInput,
  'displayName' | 'username' | 'email' | 'password' | 'photo'
>

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const errProps = { style: { outline: '2px solid #ef4446' } }

const Register = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const [authError, setError] = useState<string | null>(null)

  const [createUser] = useCreateUserMutation()
  const [login] = useLoginWithEmailMutation()

  const onSubmit = async (form: Form) => {
    try {
      const createQuery = await createUser({ variables: { input: form } })

      const { id } = createQuery?.data?.createUser ?? {}
      if (!id) return

      const { email, password } = form
      const loginQuery = await login({ variables: { email, password } })

      const { token } = loginQuery?.data?.loginWithEmail ?? {}
      if (!token) return

      setError(null)
      localStorage.setItem('token', token)

      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const Field = ({ field, ...props }: { field: keyof Form } & InputProps) => (
    <Input
      css={css}
      {...register(field, { required: true })}
      {...(errors[field] && errProps)}
      {...props}
    />
  )

  return (
    <div tw="flex items-center justify-center min-h-screen bg-[#111]">
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <div tw="flex flex-col mx-auto max-w-lg p-8 rounded-lg space-y-5">
          {authError && (
            <div tw="bg-red-500 text-gray-50 px-4 py-3">{authError}</div>
          )}

          <Field type="email" field="email" placeholder="Email" />
          <Field field="username" placeholder="Username" />
          <Field field="displayName" placeholder="Full Name" />
          <Field type="password" field="password" placeholder="Password" />

          <Button type="submit">Register</Button>

          <Link href={routes.login} passHref>
            <a tw="text-center text-green-200 no-underline">
              or, login to existing account
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
