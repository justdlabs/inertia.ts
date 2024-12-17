import { useTheme } from 'components/theme-provider';
import { IconMoon, IconSun } from 'justd-icons';
import { Button } from 'ui';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      appearance="plain"
      size="square-petite"
      shape="circle"
      aria-label={'Switch to ' + theme === 'light' ? 'dark' : 'light' + 'mode'}
      onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
