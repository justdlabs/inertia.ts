import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { IconBrandGithub } from '@tabler/icons';
import Header from '@/Components/Header';
import Container from '@/Components/Container';

export default function Home() {
    return (
        <>
            <Head title='Welcome to Laravel' />
            <Header value='Home' />
            <Container withNoHorizontalPadding>
                <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
                    <div>
                        <div className='bg-white p-4 sm:p-20'>
                            <div>
                                <ApplicationLogo className='block h-12 w-auto fill-current text-red-500' />
                            </div>
                            <div className='max-w-2xl'>
                                <div className='mt-6 text-xl sm:mt-8 sm:text-2xl'>
                                    Laravel application with Inertia and React Typescript!
                                </div>
                                <div className='mt-4 text-gray-500 sm:mt-6 sm:text-lg'>
                                    This is a Laravel application with Inertia and React Typescript. It is a work in
                                    progress. If you have any questions or suggestions, please feel free to contact me.
                                </div>
                            </div>

                            <div className='mt-16 grid grid-cols-2 gap-16'>
                                <div>
                                    <a href='https://github.com/irsyadadl/inertia.ts' target='_blank'>
                                        <IconBrandGithub className='h-10 w-8 stroke-1' />
                                    </a>
                                    <p className='mt-5'>
                                        This project is developed by{' '}
                                        <a
                                            href='https://twitter.com/irsyadadl'
                                            target='_blank'
                                            className='text-blue-500'>
                                            IrsyadAdl
                                        </a>
                                        , if you want to contribute to this project, please visit the{' '}
                                        <a
                                            href='https://github.com/irsyadadl/inertia.ts'
                                            target='_blank'
                                            className='text-blue-500'>
                                            Github Repository
                                        </a>
                                        .
                                    </p>
                                </div>
                                <div>
                                    <a href='https://parsinta.com' target='_blank'>
                                        <svg
                                            className='w-8'
                                            viewBox='0 0 32 32'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <rect width={32} height={32} rx={8} fill='#2563EB' />
                                            <path
                                                d='M22.6706 23.1516C22.9947 23.4991 23.5421 23.5202 23.8622 23.1691C25.0074 21.9133 25.838 20.3979 26.279 18.748C26.7944 16.8202 26.7573 14.7864 26.1719 12.8788C25.5865 10.9712 24.4765 9.26657 22.9687 7.95967C21.4608 6.65277 19.6157 5.79623 17.6443 5.48786C15.6728 5.1795 13.6544 5.43173 11.8194 6.21575C9.98449 6.99978 8.40699 8.284 7.26707 9.92178C6.12715 11.5596 5.47076 13.4849 5.37284 15.4779C5.28902 17.1837 5.61723 18.8803 6.32419 20.4259C6.52183 20.858 7.04948 21.005 7.46419 20.7731V20.7731C7.8789 20.5412 8.0229 20.0183 7.83202 19.5832C7.27872 18.3219 7.02343 16.9458 7.0914 15.5623C7.17349 13.8916 7.72373 12.2776 8.67931 10.9047C9.63489 9.53179 10.9573 8.45525 12.4955 7.79801C14.0337 7.14077 15.7257 6.92933 17.3784 7.18783C19.031 7.44633 20.5777 8.16435 21.8417 9.25991C23.1058 10.3555 24.0363 11.7844 24.527 13.3835C25.0177 14.9827 25.0488 16.6876 24.6168 18.3036C24.2591 19.6417 23.5957 20.8742 22.6837 21.9062C22.3691 22.2623 22.3466 22.8042 22.6706 23.1516V23.1516Z'
                                                fill='white'
                                                fillOpacity='0.3'
                                            />
                                            <path
                                                d='M15.9999 6.22514C15.9999 5.74735 15.6119 5.35636 15.1357 5.39517C13.3359 5.54182 11.5979 6.14471 10.0886 7.15318C8.33889 8.32232 6.97513 9.98406 6.16982 11.9283C5.3645 13.8725 5.15379 16.0118 5.56434 18.0758C5.97489 20.1397 6.98825 22.0356 8.47628 23.5236C9.96431 25.0117 11.8602 26.025 13.9241 26.4356C15.9881 26.8461 18.1274 26.6354 20.0716 25.8301C22.0158 25.0248 23.6776 23.661 24.8467 21.9113C25.8552 20.402 26.4581 18.664 26.6047 16.8642C26.6435 16.388 26.2526 16 25.7748 16V16C25.297 16 24.914 16.3883 24.8677 16.8638C24.7257 18.3209 24.2264 19.7254 23.4081 20.95C22.4291 22.4152 21.0375 23.5572 19.4095 24.2315C17.7815 24.9059 15.99 25.0823 14.2617 24.7386C12.5334 24.3948 10.9458 23.5462 9.69975 22.3002C8.4537 21.0541 7.60513 19.4665 7.26135 17.7382C6.91756 16.0099 7.094 14.2184 7.76836 12.5904C8.44272 10.9624 9.5847 9.57085 11.0499 8.59183C12.2745 7.77355 13.679 7.27416 15.1361 7.13223C15.6116 7.08591 15.9999 6.70294 15.9999 6.22514V6.22514Z'
                                                fill='white'
                                            />
                                            <path
                                                d='M19.2341 15.122C19.9007 15.5069 19.9007 16.4692 19.2341 16.8541L15.1148 19.2323C14.4482 19.6172 13.6148 19.1361 13.6148 18.3663V13.6098C13.6148 12.84 14.4482 12.3589 15.1148 12.7438L19.2341 15.122Z'
                                                fill='white'
                                            />
                                        </svg>
                                    </a>
                                    <p className='mt-5'>
                                        Improve your skills with parsinta by pushing your skills to the next level,
                                        through the series here such as Laravel, Vue, React, Tailwind CSS and Much more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

Home.layout = (page: any) => <AppLayout children={page} />;
