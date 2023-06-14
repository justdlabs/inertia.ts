import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
} from '@tabler/icons-react';
import { Link } from '@inertiajs/react';

const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Privacy', href: '/privacy-policy' },
        { name: 'Terms', href: '/terms-of-service' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: () => <IconBrandFacebook />,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: () => <IconBrandInstagram />,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: () => <IconBrandTwitter />,
        },
        {
            name: 'GitHub',
            href: '#',
            icon: () => <IconBrandGithub />,
        },
        {
            name: 'YouTube',
            href: '#',
            icon: () => <IconBrandYoutube />,
        },
    ],
};

export default function Footer() {
    return (
        <footer aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
                Footer
            </h2>
            <div className='mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                    <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
                        <div className='md:grid md:grid-cols-2 md:gap-8'>
                            <div>
                                <h3 className='text-sm font-semibold leading-6 text-primary'>Solutions</h3>
                                <ul role='list' className='mt-6 space-y-4'>
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className='text-sm leading-6 text-muted-foreground hover:text-primary'>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-10 md:mt-0'>
                                <h3 className='text-sm font-semibold leading-6 text-primary'>Support</h3>
                                <ul role='list' className='mt-6 space-y-4'>
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-sm leading-6 text-muted-foreground hover:text-primary'>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='md:grid md:grid-cols-2 md:gap-8'>
                            <div>
                                <h3 className='text-sm font-semibold leading-6 text-primary'>Company</h3>
                                <ul role='list' className='mt-6 space-y-4'>
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-sm leading-6 text-muted-foreground hover:text-primary'>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-10 md:mt-0'>
                                <h3 className='text-sm font-semibold leading-6 text-primary'>Legal</h3>
                                <ul role='list' className='mt-6 space-y-4'>
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-sm leading-6 text-muted-foreground hover:text-primary'>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 xl:mt-0'>
                        <h3 className='text-sm font-semibold leading-6 text-primary'>Subscribe to our newsletter</h3>
                        <p className='mt-2 text-sm leading-6 text-slate-600'>
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className='mt-6 sm:flex sm:max-w-md'>
                            <label htmlFor='email-address' className='sr-only'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email-address'
                                id='email-address'
                                autoComplete='email'
                                required
                                className='w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-primary shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full'
                                placeholder='Enter your email'
                            />
                            <div className='mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
                                <button
                                    type='submit'
                                    className='flex w-full items-center justify-center rounded-md bg-brand-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'>
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
                    <div className='flex space-x-6 md:order-2'>
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className='text-slate-400 hover:text-slate-500 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.5]'>
                                <span className='sr-only'>{item.name}</span>
                                <item.icon aria-hidden='true' />
                            </a>
                        ))}
                    </div>
                    <p className='mt-8 text-xs leading-5 text-slate-500 md:order-1 md:mt-0'>
                        &copy; 2020 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
