import { User } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { strLimit } from '@/lib/utils';

export function UserMediaObject({ user }: { user: User }) {
    return (
        <div className='flex items-center font-normal'>
            <Avatar>
                <AvatarImage src={user.avatar} alt={user.acronym} />
                <AvatarFallback>{user.acronym}</AvatarFallback>
            </Avatar>
            <div className='ml-3'>
                <strong className='font-semibold text-primary'>{user.name}</strong>
                <div className='text-muted-foreground'>{strLimit(user.email, 20)}</div>
            </div>
        </div>
    );
}
