export default function Header({ title, description }: { title: string; description: string }) {
    return (
        <div className='border-b bg-muted/40 py-24'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2 className='text-4xl font-bold tracking-tight text-primary sm:text-6xl'>{title}</h2>
                    <p className='mt-6 text-lg leading-8 text-muted-foreground'>{description}</p>
                </div>
            </div>
        </div>
    );
}
