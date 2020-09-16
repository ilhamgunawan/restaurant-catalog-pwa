/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import { setCacheNameDetails, cacheNames, clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';

clientsClaim();
skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

setCacheNameDetails({
  prefix: 'CariResto',
  suffix: 'V1',
  precache: 'precache',
  runtime: 'external',
});

const secondsTo30Days = 30 * 24 * 60 * 60;

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: `${cacheNames.runtime}-images`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: secondsTo30Days,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === CONFIG.BASE_URL,
  new StaleWhileRevalidate({
    cacheName: `${cacheNames.runtime}-API`,
    plugins: [
      new ExpirationPlugin({ maxEntries: 10 }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === CONFIG.FONTS_GOOGLE_API
            || url.origin === CONFIG.FONTS_GSTATIC,
  new StaleWhileRevalidate({
    cacheName: `${cacheNames.runtime}-fonts`,
    plugins: [
      new ExpirationPlugin({ maxEntries: 20 }),
    ],
  }),
);