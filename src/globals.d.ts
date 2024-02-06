import { type ComponentChildren } from 'preact'

declare global {
  type PropsWithChildren<P = unknown> = P & { children: ComponentChildren }
}

export {}
