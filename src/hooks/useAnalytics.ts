import { usePostHog } from 'posthog-js/react'

export const useAnalytics = () => {
    const posthog = usePostHog()

    const trackEvent = (eventName: string, properties?: Record<string, any>) => {
        if (posthog) {
            posthog.capture(eventName, properties)
        }
    }

    const identifyUser = (distinctId: string, properties?: Record<string, any>) => {
        if (posthog) {
            posthog.identify(distinctId, properties)
        }
    }

    return {
        trackEvent,
        identifyUser,
    }
}
