import { Dialog, Transition } from '@headlessui/react';
import cx from 'clsx';
import { Fragment, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
    isOpen: boolean;
    onClose(): void;
    maxWidth?: string;
}

export default function Modal({ isOpen, onClose, maxWidth = '2xl', children }: PropsWithChildren<ModalProps>) {
    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];

    if (typeof window === 'undefined') {
        return null;
    }

    return ReactDOM.createPortal(
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as='div' static className='fixed inset-0 z-10 overflow-y-auto' open={isOpen} onClose={onClose}>
                <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <Dialog.Overlay className='fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className='hidden sm:inline-block sm:h-screen sm:align-middle' aria-hidden='true'>
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                        <div
                            className={cx(
                                'inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle',
                                maxWidthClass
                            )}>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>,
        document.body
    );
}
