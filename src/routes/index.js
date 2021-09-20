import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

export default () => useRoutes([MainRoutes, AuthenticationRoutes]);
