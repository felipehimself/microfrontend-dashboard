type TMenuChildren = {
  submenuName: string;
  path: string;
};

type TRoutes = {
  menuName: string;
  menuChildren: TMenuChildren[];
};

export type AppRoutes = {
  appName: string;
  appIcon?: string;
  routes: TRoutes[];
};

export const DashboardNavRoutes: AppRoutes = {
  appName: 'Dashboard',
  appIcon: '/streaming/streaming-nav-icon.svg',
  routes: [
    {
      menuName: 'Stock',
      menuChildren: [
        {
          submenuName: 'Stock',
          path: 'stock/stock/stock',
        },
      ],
    },
    {
      menuName: 'Sales',
      menuChildren: [
        {
          submenuName: 'Sales',
          path: 'Sales/Sales/Sales',
        },
      ],
    },
  ],
};
