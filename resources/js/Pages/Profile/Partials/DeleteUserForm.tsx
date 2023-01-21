import React, { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import DialogModal from '@/Components/DialogModal';
import clsx from 'clsx';
import useRoute from '@/Hooks/useRoute';

export default function DeleteUserForm({ className }: { className?: string }) {
    const route = useRoute();
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className='text-lg font-medium text-gray-900'>Delete Account</h2>

                <p className='mt-1 text-sm text-gray-600'>
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Delete Account</DangerButton>

            <DialogModal isOpen={confirmingUserDeletion} onClose={closeModal}>
                <DialogModal.Content title={'Delete Account'}>
                    Are you sure you want to delete your account? Once your account is deleted, all of its resources and
                    data will be permanently deleted. Please enter your password to confirm you would like to
                    permanently delete your account.
                    <div className='mt-4'>
                        <TextInput
                            type='password'
                            className='mt-1 block w-3/4'
                            placeholder='Password'
                            value={data.password}
                            onChange={(e) => setData('password', e.currentTarget.value)}
                        />

                        <InputError message={errors.password} className='mt-2' />
                    </div>
                </DialogModal.Content>
                <DialogModal.Footer>
                    <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                    <DangerButton
                        onClick={deleteUser}
                        className={clsx('ml-2', { 'opacity-25': processing })}
                        disabled={processing}>
                        Delete Account
                    </DangerButton>
                </DialogModal.Footer>
            </DialogModal>
        </section>
    );
}
