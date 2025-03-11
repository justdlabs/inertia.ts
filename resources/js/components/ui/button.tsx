import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const buttonStyles = tv({
  base: [
    "outline-0 outline-offset-2 hover:no-underline focus-visible:outline-2 forced-colors:outline-[Highlight]",
    "relative inline-flex items-center justify-center gap-x-2 border font-medium",
    "forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-1 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-current/60 pressed:*:data-[slot=icon]:text-current *:data-[slot=icon]:transition hover:*:data-[slot=icon]:text-current/90",
    "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:my-1 *:data-[slot=avatar]:*:size-4 *:data-[slot=avatar]:size-4 *:data-[slot=avatar]:shrink-0",
    "inset-ring-0 dark:inset-ring dark:border-0",
    "inset-ring-(--btn-border) inset-shadow-2xs border-(--btn-border) bg-(--btn-bg) text-(--btn-fg)",
    "hover:bg-(--btn-bg-hovered) hover:ring-(--btn-border-hovered)",
    "pressed:border-(--btn-border) pressed:bg-(--btn-bg)",
  ],
  variants: {
    intent: {
      primary: [
        "outline-ring [--btn-bg:theme(--color-primary/95%)] [--btn-border:var(--color-primary)] [--btn-fg:var(--color-primary-fg)] dark:[--btn-bg:theme(--color-primary/90%)]",
        "[--btn-bg-hovered:theme(--color-primary/87%)] [--btn-border-hovered:theme(--color-primary/87%)] dark:[--btn-bg-hovered:theme(--color-primary)] dark:[--btn-border-hovered:theme(--color-primary)]",
        "inset-shadow-primary-fg/20 pressed:inset-shadow-primary-fg/20 hover:inset-shadow-primary-fg/25",
      ],
      secondary: [
        "outline-ring [--btn-bg:theme(--color-secondary/95%)] [--btn-border:theme(--color-secondary-fg/10%)] [--btn-fg:var(--color-secondary-fg)] dark:[--btn-bg:theme(--color-secondary/85%)] dark:[--btn-border:theme(--color-secondary-fg/7%)]",
        "[--btn-bg-hovered:color-mix(in_oklab,var(--color-secondary)_60%,white_20%)] dark:[--btn-bg-hovered:color-mix(in_oklab,var(--color-secondary)_96%,white_4%)]",
        "inset-shadow-white/15 pressed:inset-shadow-white/15 hover:inset-shadow-white/20",
      ],
      warning: [
        "[--btn-warning:theme(--color-warning/97%)]",
        "[--btn-warning-hovered:color-mix(in_oklab,var(--color-warning)_85%,white_15%)]",
        "dark:[--btn-warning-hovered:color-mix(in_oklab,var(--color-warning)_90%,white_10%)]",
        "outline-warning [--btn-bg:var(--btn-warning)] [--btn-border:var(--btn-warning)] [--btn-fg:var(--color-warning-fg)]",
        "[--btn-bg-hovered:var(--btn-warning-hovered)] [--btn-border-hovered:var(--btn-warning-hovered)]",
        "inset-shadow-white/25 pressed:inset-shadow-white/25 hover:inset-shadow-white/30",
      ],
      danger: [
        "outline-danger [--btn-bg:theme(--color-danger/95%)] [--btn-border:var(--color-danger)] [--btn-fg:var(--color-danger-fg)] dark:[--btn-bg:var(--color-danger)]",
        "[--btn-danger-hovered:color-mix(in_oklab,var(--color-danger)_93%,white_7%)]",
        "dark:[--btn-danger-hovered:color-mix(in_oklab,var(--color-danger)_96%,white_4%)]",
        "[--btn-bg-hovered:var(--btn-danger-hovered)] [--btn-border-hovered:var(--btn-danger-hovered)]",
        "inset-shadow-danger-fg/30 pressed:inset-shadow-danger-fg/30 hover:inset-shadow-danger-fg/35",
      ],
      outline: [
        "inset-ring-0 inset-shadow-none pressed:bg-secondary outline-ring [--btn-border:var(--color-border)] hover:bg-secondary",
      ],
      plain:
        "inset-ring-0 inset-shadow-none pressed:bg-secondary outline-ring [--btn-border:transparent] hover:bg-secondary",
    },
    size: {
      "extra-small":
        "h-8 px-[calc(var(--spacing)*2.7)] text-xs/4 **:data-[slot=avatar]:*:size-3.5 **:data-[slot=avatar]:size-3.5 **:data-[slot=icon]:size-3 lg:text-[0.800rem]/4",
      small: "h-9 px-3.5 text-sm/5 sm:text-sm/5",
      medium: "h-10 px-4 text-base sm:text-sm/6",
      large:
        "h-11 px-4.5 text-base *:data-[slot=icon]:mx-[-1.5px] sm:*:data-[slot=icon]:size-5 lg:text-base/7",
      "square-petite": "size-9 shrink-0",
    },
    shape: {
      square: "rounded-lg",
      circle: "rounded-full",
    },
    isDisabled: {
      false: "cursor-pointer forced-colors:disabled:text-[GrayText]",
      true: "inset-shadow-none cursor-default border-0 opacity-50 ring-0 dark:inset-ring-0 forced-colors:disabled:text-[GrayText]",
    },
    isPending: {
      true: "cursor-default opacity-50",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    shape: "square",
  },
})

interface ButtonProps extends ButtonPrimitiveProps {
  intent?: "primary" | "secondary" | "danger" | "warning" | "outline" | "plain"
  size?: "medium" | "large" | "square-petite" | "extra-small" | "small"
  shape?: "square" | "circle"
  ref?: React.Ref<HTMLButtonElement>
}

const Button = ({ className, intent, size, shape, ref, ...props }: ButtonProps) => {
  return (
    <ButtonPrimitive
      ref={ref}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          intent,
          size,
          shape,
          className,
        }),
      )}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </ButtonPrimitive>
  )
}

export type { ButtonProps }
export { Button, buttonStyles }
