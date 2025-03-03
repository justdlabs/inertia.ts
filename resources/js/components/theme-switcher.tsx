import { IconDeviceDesktop2, IconMoon, IconSun } from "justd-icons"
import { Button, composeTailwindRenderProps } from "ui"
import { useTheme } from "@/utils/use-theme"

export function ThemeSwitcher({
  shape = "square",
  appearance = "plain",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, updateTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    updateTheme(nextTheme)
  }

  return (
    <Button
      shape={shape}
      appearance={appearance}
      size="square-petite"
      className={composeTailwindRenderProps(className, "**:data-[slot=icon]:text-fg")}
      aria-label="Switch theme"
      onPress={toggleTheme}
      {...props}
    >
      {theme === "light" ? <IconSun /> : theme === "dark" ? <IconMoon /> : <IconDeviceDesktop2 />}
    </Button>
  )
}
