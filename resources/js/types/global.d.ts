import { FormDataConvertible, Method, PreserveStateOption, Progress } from '@inertiajs/core'
import { AxiosInstance } from 'axios'
import { route as ziggyRoute } from 'ziggy-js'

declare global {
    interface Window {
        axios: AxiosInstance
    }

    var route: typeof ziggyRoute
}

declare module 'react-aria-components' {
    interface RouterConfig {
        routerOptions: {
            method?: Method
            data?: Record<string, FormDataConvertible>
            replace?: boolean
            preserveState?: PreserveStateOption
            preserveScroll?: PreserveStateOption
            forceFormData?: boolean
            only?: string[]
            onBefore?: () => void
            onStart?: () => void
            onProgress?: (progress: Progress) => void
            onCancel?: () => void
            onSuccess?: () => void
            onError?: () => void
            onFinish?: () => void
        }
    }
}
