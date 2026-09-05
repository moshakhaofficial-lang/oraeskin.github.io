/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
}
