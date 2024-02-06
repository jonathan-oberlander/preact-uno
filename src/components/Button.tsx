import { type JSX } from 'preact/jsx-runtime'

export const Button = ({
  className,
  ...buttonProps
}: JSX.HTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`app-button b-solid b-coolgray ${className}`}
    {...buttonProps}
  />
)
