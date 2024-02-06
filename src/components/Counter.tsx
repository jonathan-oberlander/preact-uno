import { useSignal, useComputed } from '@preact/signals'
import { Button } from './Button'

export function Counter() {
  const count = useSignal(0)
  const double = useComputed(() => count.value * 2)

  return (
    <>
      <p className="c-coolgray-400 text-xl">
        {count} x 2 = {double}
      </p>
      <Button onClick={() => count.value++}>Increment</Button>
      <Button onClick={() => count.value--} className="active:bg-sky">
        Decrement
      </Button>
    </>
  )
}
