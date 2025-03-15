import { twMerge } from "tailwind-merge"

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card"
      className={twMerge(
        "group/card flex flex-col gap-(--card-spacing) rounded-lg border bg-bg py-(--card-spacing) text-fg shadow-xs [--card-spacing:theme(spacing.6)] has-[table]:overflow-hidden **:data-[slot=table-header]:bg-muted/50 has-[table]:**:data-[slot=card-footer]:border-t **:[table]:overflow-hidden",
        className,
      )}
      {...props}
    />
  )
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

const CardHeader = ({ className, title, description, children, ...props }: HeaderProps) => (
  <div
    data-slot="card-header"
    className={twMerge(
      "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-(--card-spacing) has-[data-slot=card-action]:grid-cols-[1fr_auto]",
      className,
    )}
    {...props}
  >
    {title && <CardTitle>{title}</CardTitle>}
    {description && <CardDescription>{description}</CardDescription>}
    {!title && typeof children === "string" ? <CardTitle>{children}</CardTitle> : children}
  </div>
)

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={twMerge("font-semibold text-lg leading-none tracking-tight", className)}
      {...props}
    />
  )
}

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      data-slot="card-description"
      className={twMerge("row-start-2 text-pretty text-muted-fg text-sm", className)}
      {...props}
    />
  )
}

const CardAction = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-action"
      className={twMerge(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-content"
      className={twMerge(
        "px-(--card-spacing) has-[[data-slot=table-header]]:bg-muted/40 has-[table]:p-0 group-has-[table]/card:border-t **:data-[slot=table-cell]:px-(--card-spacing) **:data-[slot=table-column]:px-(--card-spacing) [&:has(table)+[data-slot=card-footer]]:pt-(--card-spacing)",
        className,
      )}
      {...props}
    />
  )
}

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-footer"
      className={twMerge("flex items-center px-(--card-spacing) [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

Card.Content = CardContent
Card.Description = CardDescription
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Title = CardTitle
Card.Action = CardAction

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction }
