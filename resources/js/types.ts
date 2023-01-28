import React from 'react';
import { FormDataConvertible, Method, PreserveStateOption, Progress } from '@inertiajs/core';

export type Nullable<T> = T | null;

export interface ProfileEditProps {
    mustVerifyEmail: boolean;
    status: string | undefined;
}

export interface InertiaSharedProps {
    ziggy: {
        defaults: [];
        routes: any;
        port: string | null;
        url: string;
    };
    auth: {
        user: {
            id: number;
            name: string;
            username: string;
            acronym: string;
            email: string;
            picture: string;
            email_verified_at: string | null;
            admin: boolean;
        };
    };
    errorBags: any;
    errors: any;
}

interface BaseInertiaLinkProps {
    as?: string;
    data?: Record<string, FormDataConvertible>;
    href: string;
    method?: Method;
    headers?: Record<string, string>;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => void;
    preserveScroll?: PreserveStateOption;
    preserveState?: PreserveStateOption;
    replace?: boolean;
    only?: string[];
    onCancelToken?: (cancelToken: import('axios').CancelTokenSource) => void;
    onBefore?: () => void;
    onStart?: () => void;
    onProgress?: (progress: Progress) => void;
    onFinish?: () => void;
    onCancel?: () => void;
    onSuccess?: () => void;
    onError?: () => void;
    queryStringArrayFormat?: 'indices' | 'brackets';
}

export type InertiaLinkProps = BaseInertiaLinkProps &
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseInertiaLinkProps> &
    Omit<React.AllHTMLAttributes<HTMLElement>, keyof BaseInertiaLinkProps>;
