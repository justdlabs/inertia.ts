export type DateTime = string;

export type Nullable<T> = T | null;

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    email_verified_at: DateTime;
    acronym: string;
    avatar: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
