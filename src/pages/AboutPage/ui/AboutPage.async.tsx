import { lazy } from 'react';
// prettier-ignore
export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
  }),
);
