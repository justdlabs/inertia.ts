import {
  Link as LinkPrimitive,
  type LinkProps as LinkPrimitiveProps,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { focusButtonStyles } from "./primitive"

const linkStyles = tv({
  extend: focusButtonStyles,
  base: "transition-[color,_opacity] disabled:cursor-default disabled:opacity-60 forced-colors:disabled:text-[GrayText]",
  variants: {
    intent: {
      unstyled: "text-current",
      primary: "text-fg hover:underline",
      secondary: "text-muted-fg hover:text-secondary-fg",
    },
  },
  defaultVariants: {
    intent: "unstyled",
  },
})

interface LinkProps extends LinkPrimitiveProps {
  intent?: "primary" | "secondary" | "unstyled"
  ref?: React.RefObject<HTMLAnchorElement>
}

const Link = ({ className, ref, ...props }: LinkProps) => {
  return (
    <LinkPrimitive
      ref={ref}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        linkStyles({ ...renderProps, intent: props.intent, className }),
      )}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </LinkPrimitive>
  )
}

export type { LinkProps }
export { Link, linkStyles }
