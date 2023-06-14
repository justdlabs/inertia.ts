import React, { ReactNode } from 'react';
import { CardDescription, CardHeader, CardTitle } from '@/Components/Card';

export default function SectionTitle({ title, description }: { title: ReactNode; description: ReactNode }) {
    return (
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
    );
}
