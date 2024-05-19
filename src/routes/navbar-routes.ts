export type TRoutes = {
  submenuName: string;
  path: string;
};

export type TAppRoutes = {
  appName: string;
  path: string;
  appIcon: string;
  routes: TRoutes[];
};

export const MfeNavRoutes: TAppRoutes = {
  appName: 'Dashboard',
  appIcon: 'Dashboard',
  path: 'dashboard',
  routes: [
    {
      submenuName: 'Stock',
      path: 'dashboard/stock',
    },

    {
      submenuName: 'Sales',
      path: 'dashboard/sales',
    },
  ],
};
