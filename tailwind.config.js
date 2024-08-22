/** @type {import('tailwindcss').Config} */
import { withTV } from 'tailwind-variants/transformer'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = withTV({
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...fontFamily.sans]
            },
            colors: {
                light: 'hsl(var(--light))',
                dark: 'hsl(var(--dark))',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                toggle: 'hsl(var(--toggle))',
                bg: 'hsl(var(--bg))',
                fg: 'hsl(var(--fg))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    fg: 'hsl(var(--primary-fg))',
                    50: '#eef8ff',
                    100: '#d8eeff',
                    200: '#b9e0ff',
                    300: '#89cfff',
                    400: '#52b4ff',
                    500: '#2a91ff',
                    600: '#0d6efd',
                    700: '#0c5ae9',
                    800: '#1149bc',
                    900: '#144194',
                    950: '#11295a'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    fg: 'hsl(var(--secondary-fg))'
                },
                tertiary: {
                    DEFAULT: 'hsl(var(--tertiary))',
                    fg: 'hsl(var(--tertiary-fg))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    fg: 'hsl(var(--accent-fg))'
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    fg: 'hsl(var(--success-fg))'
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    fg: 'hsl(var(--info-fg))'
                },
                danger: {
                    DEFAULT: 'hsl(var(--danger))',
                    fg: 'hsl(var(--danger-fg))'
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    fg: 'hsl(var(--warning-fg))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    fg: 'hsl(var(--muted-fg))'
                },
                overlay: {
                    DEFAULT: 'hsl(var(--overlay))',
                    fg: 'hsl(var(--overlay-fg))'
                }
            },
            borderRadius: {
                '3xl': 'calc(var(--radius) + 7.5px)',
                '2xl': 'calc(var(--radius) + 5px)',
                xl: 'calc(var(--radius) + 2.5px)',
                lg: 'calc(var(--radius))',
                md: 'calc(var(--radius) - 2.5px)',
                sm: 'calc(var(--radius) - 5px)'
            }
        }
    },
    plugins: [require('tailwindcss-animate'), require('tailwindcss-react-aria-components')]
})

export default config
