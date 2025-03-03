import GuestLayout from "@/layouts/guest-layout";
import { Head, useForm } from "@inertiajs/react";
import type React from "react";
import { useEffect } from "react";
import { Button, Checkbox, Form, Link, TextField } from "ui";

interface LoginProps {
    status: string;
    canResetPassword: boolean;
}

export default function Login(args: LoginProps) {
    const { status, canResetPassword } = args;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-green-600 text-sm dark:text-green-400">
                    {status}
                </div>
            )}

            <Form
                validationErrors={errors}
                onSubmit={submit}
                className="flex flex-col gap-y-4"
            >
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={data.email}
                    autoComplete="username"
                    autoFocus
                    onChange={(v) => setData("email", v)}
                    errorMessage={errors.email}
                    isRequired
                />
                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    autoComplete="current-password"
                    onChange={(v) => setData("password", v)}
                    errorMessage={errors.password}
                    isRequired
                />

                <div className="flex items-center justify-between">
                    <Checkbox
                        name="remember"
                        onChange={(v) => setData("remember", v as any)}
                    >
                        Remember me
                    </Checkbox>
                    {canResetPassword && (
                        <Link
                            href="/forgot-password"
                            className="sm:text-sm"
                            intent="secondary"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <Button isDisabled={processing} type="submit">
                    Log in
                </Button>
                <div className="text-center">
                    <Link
                        href={route("register")}
                        className="sm:text-sm"
                        intent="secondary"
                    >
                        Dont have account? Register
                    </Link>
                </div>
            </Form>
        </>
    );
}

Login.layout = (page: React.ReactNode) => {
    return (
        <GuestLayout
            header="Login"
            description="Log in to your account."
            children={page}
        />
    );
};
