import { Toaster as Sonner } from 'sonner';
import { useTheme } from '@/components/theme-provider';
import { IconCircleCheckFill, IconCircleInfoFill, IconTriangleInfoFill } from '@irsyadadl/paranoid';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme();
    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className='toaster group'
            toastOptions={{
                classNames: {
                    toast: '[&>[data-icon]>svg]:size-[1.1rem] [&>[data-icon]>svg]:text-muted-foreground rounded-xl group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground border group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                    description: 'group-[.toast]:text-muted-foreground',
                    actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                    cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
                },
            }}
            icons={{
                success: <IconCircleCheckFill />,
                info: <IconCircleInfoFill />,
                warning: <IconTriangleInfoFill />,
                error: <IconTriangleInfoFill />,
            }}
            {...props}
        />
    );
};

export { Toaster };
