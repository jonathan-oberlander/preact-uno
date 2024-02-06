import { useSignal } from '@preact/signals'
import { type JSX } from 'preact/jsx-runtime'
import { z } from 'zod'
import { Button } from './Button'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

const schema = z.object({
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
})

export function Form() {
  const signal = useSignal<z.infer<typeof schema>>({ phone: '' })
  const message = useSignal<string>('')

  const onSubmit = (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const validation = schema.safeParse(Object.fromEntries(formData))

    if (!validation.success) {
      validation.error.issues.map((issue) => {
        const isPhone = issue.path.includes('phone')
        if (isPhone) {
          message.value = issue.message
        }
        return
      })
    }
  }

  const onInput = (e: JSX.TargetedInputEvent<HTMLInputElement>) => {
    message.value = ''
    signal.value = { phone: e.currentTarget.value }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name="phone"
        type="tel"
        value={signal.value.phone}
        onInput={onInput}
      />
      <p className="text-red m-0">{message.value}</p>
      <Button type="submit">Submit</Button>
    </form>
  )
}
