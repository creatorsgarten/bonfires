import 'twin.macro'

import { ErrorBoundary as Boundary, FallbackProps } from 'react-error-boundary'

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div tw="w-full bg-purple-800">
      <div tw="flex flex-col min-h-screen justify-center items-center text-white text-left h-full">
        <div tw="mx-auto max-w-4xl px-8 py-6 shadow-2xl bg-purple-600 space-y-2">
          <h1 tw="text-lg">
            {error.name}: {error.message}
          </h1>

          <code tw="break-words text-[6px] truncate">
            <pre>{error.stack}</pre>
          </code>

          <button onClick={resetErrorBoundary}>reset</button>
        </div>
      </div>
    </div>
  )
}

export const ErrorBoundary: React.FC = ({ children }) => (
  <Boundary FallbackComponent={ErrorFallback}>{children}</Boundary>
)
