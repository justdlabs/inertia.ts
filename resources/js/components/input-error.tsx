import { HTMLAttributes } from 'react';
import { cn, Description } from 'ui';

export function InputError({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <Description {...props} className={cn('text-sm block text-danger')}>
            {message}
        </Description>
    ) : null;
}
