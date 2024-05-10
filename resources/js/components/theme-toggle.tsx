import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { IconDeviceDesktop, IconMoon, IconSun } from '@irsyadadl/paranoid';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='flex items-center gap-x-1 [&_svg]:size-4 [&_button]:rounded-full'>
            <Button
                size='icon'
                variant='ghost'
                className={cn(theme === 'light' ? 'bg-secondary' : 'bg-background')}
                onClick={() => setTheme('light')}>
                <IconSun />
            </Button>
            <Button
                size='icon'
                variant='ghost'
                className={cn(theme === 'dark' ? 'bg-secondary' : 'bg-background')}
                onClick={() => setTheme('dark')}>
                <IconMoon />
            </Button>
            <Button
                size='icon'
                variant='ghost'
                className={cn(theme === 'system' ? 'bg-secondary' : 'bg-background')}
                onClick={() => setTheme('system')}>
                <IconDeviceDesktop />
            </Button>
        </div>
    );
}
