export const Container = ({ children }: PropsWithChildren<unknown>) => (
  <div className="flex ma p-2 w-lg h-md border-rd justify-center b-amber b-solid ">
    <div className="ma">{children}</div>
  </div>
)
