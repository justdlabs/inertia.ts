import type * as React from "react"

const TouchTarget = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span
        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}

export { TouchTarget }
