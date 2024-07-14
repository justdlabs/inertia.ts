import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { IconDeviceDesktop, IconMoon, IconSun } from '@irsyadadl/paranoid'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex [&_button>[data-slot=icon]]:text-fg items-center gap-x-1 [&_svg]:size-4 [&_button]:rounded-full">
            <Button
                size="square-petite"
                appearance="plain"
                className={cn(theme === 'light' ? 'bg-secondary' : 'bg-background')}
                onPress={() => setTheme('light')}
            >
                <IconSun />
            </Button>
            <Button
                size="square-petite"
                appearance="plain"
                className={cn(theme === 'dark' ? 'bg-secondary' : 'bg-background')}
                onPress={() => setTheme('dark')}
            >
                <IconMoon />
            </Button>
            <Button
                size="square-petite"
                appearance="plain"
                className={cn(theme === 'system' ? 'bg-secondary' : 'bg-background')}
                onPress={() => setTheme('system')}
            >
                <IconDeviceDesktop />
            </Button>
        </div>
    )
}
