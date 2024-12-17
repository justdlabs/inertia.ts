import { FlashMessageData } from '@/types/index';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Toast } from 'ui';

export function FlashMessage() {
  const { flash_message } = usePage<{ flash_message: FlashMessageData }>().props;
  useEffect(() => {
    if (flash_message && flash_message.message) {
      (toast as any)[flash_message.type](flash_message.message);
    }
  }, [flash_message]);
  return <Toast />;
}
