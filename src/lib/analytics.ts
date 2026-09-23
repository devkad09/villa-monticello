/**
 * Pluggable Conversion & Analytics Event Tracking Abstraction
 * Supports Google Analytics 4 (window.gtag), Plausible, custom hooks, or fallback console logs in development.
 */

export type AnalyticsEventType =
  | 'view_suite'
  | 'click_book_now'
  | 'click_book_your_stay'
  | 'click_check_availability'
  | 'start_booking'
  | 'view_offer'
  | 'click_offer'
  | 'submit_contact'
  | 'submit_event_inquiry'
  | 'click_concierge'
  | 'open_booking_drawer'
  | 'view_reviews'
  | 'click_phone'
  | 'click_whatsapp'
  | 'click_restaurant_reservation';

export interface AnalyticsEventParams {
  suite?: string;
  suiteSlug?: string;
  suiteName?: string;
  offerSlug?: string;
  offerTitle?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  sourceLocation?: string;
  method?: string;
  type?: string;
  phoneNumber?: string;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(eventName: AnalyticsEventType, params?: AnalyticsEventParams) {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Google Analytics (gtag.js) integration if present
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, params);
  }

  // Plausible integration if present
  if (typeof (window as unknown as { plausible?: (event: string, opts?: unknown) => void }).plausible === 'function') {
    (window as unknown as { plausible: (event: string, opts?: unknown) => void }).plausible(eventName, { props: params });
  }

  // Development logger for verification
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics Event: ${eventName}]`, eventPayload);
  }
}
