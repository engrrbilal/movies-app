import { memo } from 'react';
import PublicRoutes from './public-routes';

/*
* TODO: when user loggedIn he/she unable to goto public routes
*  ie: ('/about', '/contact', 'any other public route')
*/
const Auth = () => {
  // TODO: temp logged-in check, update as per your app logic
  return <PublicRoutes />
};

export default memo(Auth);
