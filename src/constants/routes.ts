import { RouteT } from '../types/constants/routes';
import { ALL_ROLES } from './roles';

const ROUTES: RouteT[] = [
  {
    exact: true,
    path: '/',
    component: '',
    permissions: ALL_ROLES,
  },
  {
    exact: false,
    path: '/notes',
    component: '',
    permissions: ALL_ROLES,
  },
  {
    exact: false,
    path: '/trash',
    component: '',
    permissions: ALL_ROLES,
  },
];

export default ROUTES;
