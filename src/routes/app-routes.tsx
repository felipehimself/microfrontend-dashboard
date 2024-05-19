import { lazyImport } from '@/utils/lazy-import';
import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { Fallback } from '@/components/shared/fallback';
import { AppLayout } from '../components/layout';

const { StockRoutes } = lazyImport(
  () => import('@/features/stock'),
  'StockRoutes'
);
const { SalesRoutes } = lazyImport(
  () => import('@/features/sales'),
  'SalesRoutes'
);

const App = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard/stock/*',
        element: <StockRoutes />,
      },
      {
        path: 'dashboard/sales/*',
        element: <SalesRoutes />,
      },
    ],
  },
];
