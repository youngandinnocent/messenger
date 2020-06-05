import { LayoutRedux } from 'containers/LayoutContainer';
import ProfileContainer from 'containers/ProfileContainer';
import NotFoundPage from 'components/NotFoundPage';

export default [
  {
    id: 0,
    path: '/',
    exact: true,
    component: LayoutRedux,
  },
  {
    id: 1,
    path: '/chats/:id([\\d]+)',
    exact: true,
    component: LayoutRedux,
  },
  {
    id: 2,
    path: '/profile',
    exact: true,
    component: ProfileContainer,
  },
  {
    id: 3,
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];
