import { cn } from "@/utils/classes";
import {
    IconCircleCheckFill,
    IconCircleExclamationFill,
    IconCircleInfoFill,
    IconTriangleExclamationFill,
} from "justd-icons";
import { Toaster as ToasterPrimitive, type ToasterProps } from "sonner";

import { buttonStyles } from "./button";
import { Loader } from "./loader";
import { useTheme } from "@/utils/use-theme";

const Toast = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();
    return (
        <ToasterPrimitive
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            richColors
            icons={{
                info: <IconCircleInfoFill className="text-warning-fg" />,
                error: <IconTriangleExclamationFill />,
                warning: <IconCircleExclamationFill />,
                success: <IconCircleCheckFill />,
                loading: <Loader variant="spin" />,
            }}
            toastOptions={{
                unstyled: true,
                closeButton: true,
                classNames: {
                    toast: cn(
                        "text-[0.925rem] not-has-data-description:**:data-title:font-normal!",
                        "has-data-description:**:data-title:font-medium [&:has([data-description])_[data-title]]:text-base!",
                        "has-data-[slot=icon]:**:data-content:pl-0",
                        "has-data-button:*:data-content:mb-10",
                        "has-data-button:hover:**:data-close-button:hidden! flex w-full rounded-xl p-4",
                        "inset-ring-1 inset-ring-current/10 border-transparent backdrop-blur-3xl",
                    ),
                    icon: "absolute top-[0.2rem] [--toast-icon-margin-end:7px] *:data-[slot=icon]:text-fg *:data-[slot=icon]:size-4.5 **:data-[slot=icon]:text-current",
                    title: "",
                    description: "",
                    default: "bg-bg text-fg [--gray2:theme(--color-fg/10%)]",
                    content:
                        "pr-6 *:data-description:text-current/65! *:data-description:text-sm!",
                    error: "inset-ring-danger/15 dark:inset-ring-danger/20 [--error-bg:theme(--color-danger/5%)] [--error-text:var(--color-danger)]",
                    info: "inset-ring-sky-600/15 dark:inset-ring-sky-500/20 [--info-bg:theme(--color-sky-500/5%)] [--info-text:var(--color-sky-700)] dark:[--info-text:var(--color-sky-400)]",
                    warning:
                        "inset-ring-warning/15 dark:inset-ring-warning/20 [--warning-bg:theme(--color-warning/7%)] [--warning-text:var(--color-warning-fg)] dark:[--warning-text:var(--color-warning)]",
                    success:
                        "inset-ring-success/15 [--success-bg:theme(--color-success/5%)] [--success-text:var(--color-success)]",
                    cancelButton: buttonStyles({
                        className:
                            "hover:border-secondary-fg/10 hover:bg-secondary/90 self-start absolute bottom-4 left-4 justify-self-start",
                        size: "extra-small",
                        appearance: "outline",
                    }),
                    actionButton: buttonStyles({
                        className:
                            "absolute bottom-4 right-4 self-end justify-self-end",
                        size: "extra-small",
                    }),
                    closeButton:
                        "*:[svg]:size-5 group-hover:block! hidden! size-6! rounded-md! [--gray1:transparent] [--gray4:transparent] [--gray5:transparent] [--gray12:current] [--toast-close-button-start:full] [--toast-close-button-end:-6px] [--toast-close-button-transform:translate(-75%,60%)] absolute",
                },
            }}
            {...props}
        />
    );
};

export { Toast };
export type { ToasterProps };
