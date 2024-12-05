"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!POSTHOG_KEY || !POSTHOG_HOST) {
  console.warn(
    "If you want to enable PostHog analytics, set NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST environment variables."
  );
} else if (typeof window !== "undefined") {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    on_request_error: (err) => {
      console.error(
        "sending the event is probably blocked by an adblocker or brave browser",
        err
      );
    },
    person_profiles: "never", // or 'always' to create profiles for anonymous users as well
  });
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
