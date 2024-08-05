import { Button } from '@/components/ui/button'
import { useForm } from '@inertiajs/react'
import { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Modal,
    ModalBody,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    TextField
} from 'ui'

export function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false)
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors
    } = useForm({
        password: ''
    })

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true)
    }

    const deleteUser = () => {
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset()
        })
    }

    const closeModal = () => {
        setConfirmingUserDeletion(false)
        reset()
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Modal>
                    <Button intent="danger">Delete Account</Button>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>Delete Account</ModalTitle>
                            <ModalDescription>
                                Are you sure you want to delete your account? Once your account is deleted, all of its
                                resources and data will be permanently deleted. Please enter your password to confirm
                                you would like to permanently delete your account.
                            </ModalDescription>
                        </ModalHeader>

                        <ModalBody>
                            <TextField
                                type="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(v) => setData('password', v)}
                                errorMessage={errors.password}
                                isRequired
                            />
                        </ModalBody>
                        <ModalFooter>
                            <ModalClose>Cancel</ModalClose>
                            <Button intent="danger" type="submit" onPress={deleteUser} isDisabled={processing}>
                                Continue
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </CardContent>
        </Card>
    )
}
