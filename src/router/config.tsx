import React, {
  ComponentType, lazy, LazyExoticComponent, ReactNode,
} from 'react';

export interface IRoute {
    // Path, like in basic prop
    path: string;
    // Exact, like in basic prop
    exact: boolean;
    // Preloader for lazy loading
    fallback: NonNullable<ReactNode> | null;
    // Lazy Loaded component
    component?: any;
    // Sub routes
    routes?: IRoute[];
    // Redirect path
    redirect?: string;
    // If router is private, this is going to be true
    private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/Home',
    fallback: <div> Loading... </div>,
  },
  {
    path: '/Home',
    component: lazy(() => import('../pages/Home')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    routes: [
      {
        path: '/Home/signup',
        component: lazy(() => import('../pages/Error/404')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
      },
    ],
  },
  {
    path: '/Home/signup',
    component: lazy(() => import('../pages/Layout')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
];
