import { useLoginRedirectGuard } from '../../hooks/useLoginGuard'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  useLoginRedirectGuard()

  return <div>{children}</div>
}
