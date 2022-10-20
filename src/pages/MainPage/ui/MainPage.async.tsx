import { lazy } from 'react';
// prettier-ignore
export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
  }),
);
