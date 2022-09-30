import { ComponentChildren } from "preact";
import { useSignal, useComputed } from "@preact/signals";

import "uno.css";

export function App() {
  return (
    <Body>
      <Counter />
    </Body>
  );
}

type Children = { children: ComponentChildren };

const Body = ({ children }: Children) => (
  <div className="b-amber b-solid w-lg ma flex h-md border-rd p-2 justify-center">
    <div className="ma">{children}</div>
  </div>
);

function Counter() {
  const count = useSignal(0);
  const double = useComputed(() => count.value * 2);

  return (
    <>
      <p className="prose-fuchsia">
        {count} x 2 = {double}
      </p>
      <Button onClick={() => count.value++} className="app-button">
        Increment
      </Button>
      <Button
        onClick={() => count.value--}
        className="app-button  active:bg-sky  outline-0"
      >
        Decrement
      </Button>
    </>
  );
}

const Button = ({ ...buttonProps }: JSX.HTMLAttributes<HTMLButtonElement>) => (
  <button {...buttonProps}></button>
);
