import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/button';

export function ThemeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none');
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none');
        }, 0);
    }

    function toggleMode() {
        disableTransitionsTemporarily();

        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        let isSystemDarkMode = darkModeMediaQuery.matches;
        let isDarkMode = document.documentElement.classList.toggle('dark');

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode;
        }
    }

    return (
        <Button
            size='icon'
            variant='outline'
            className='rounded-full'
            type='button'
            aria-label='Toggle dark mode'
            onClick={toggleMode}>
            <SunIcon className='dark:hidden' />
            <MoonIcon className='hidden dark:block' />
        </Button>
    );
}
