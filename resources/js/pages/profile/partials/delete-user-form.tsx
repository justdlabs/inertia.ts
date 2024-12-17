import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Card, Modal, TextField } from 'ui';

export function DeleteUserForm() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ''
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser = () => {
    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset()
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Delete Account</Card.Title>
        <Card.Description>
          Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your
          account, please download any data or information that you wish to retain.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Modal>
          <Button intent="danger">Delete Account</Button>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Delete Account</Modal.Title>
              <Modal.Description>
                Are you sure you want to delete your account? Once your account is deleted, all of its resources and
                data will be permanently deleted. Please enter your password to confirm you would like to permanently
                delete your account.
              </Modal.Description>
            </Modal.Header>

            <Modal.Body>
              <TextField
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(v) => setData('password', v)}
                errorMessage={errors.password}
                isRequired
              />
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close>Cancel</Modal.Close>
              <Button intent="danger" type="submit" onPress={deleteUser} isDisabled={processing}>
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Card.Content>
    </Card>
  );
}
