import { ComponentChildren } from "preact";
import { useSignal, useComputed } from "@preact/signals";

import "uno.css";

type WithChildren = { children: ComponentChildren };

export function App() {
  return (
    <Body>
      <Counter />
    </Body>
  );
}

type BodyProps = {} & WithChildren;

const Body = ({ children }: BodyProps) => (
  <div className="flex ma p-2 w-lg h-md border-rd justify-center b-amber b-solid ">
    <div className="ma">{children}</div>
  </div>
);

function Counter() {
  const count = useSignal(0);
  const double = useComputed(() => count.value * 2);

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
  );
}

const Button = ({
  className,
  ...buttonProps
}: JSX.HTMLAttributes<HTMLButtonElement>) => (
  <button className={`app-button ${className}`} {...buttonProps}></button>
);
