import { RouteT } from '../types/constants/routes';
import { ALL_ROLES } from './roles';
import Home from '../pages/Home/Home';
import Notes from '../pages/Notes/Notes';
import Trash from '../pages/Trash/Trash';

const ROUTES: RouteT[] = [
  {
    exact: true,
    path: '/',
    component: <Home />,
    permissions: ALL_ROLES,
  },
  {
    exact: false,
    path: '/notes',
    component: <Notes />,
    permissions: ALL_ROLES,
  },
  {
    exact: false,
    path: '/trash',
    component: <Trash />,
    permissions: ALL_ROLES,
  },
];

export default ROUTES;
