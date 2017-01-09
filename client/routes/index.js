import indexRoute from './index/index.js';
import diaryRoute from './diary';
import registerRoute from './register';
import loginRoute from './login';
import logoutRoute from './logout';


export default {
  path: '/',
  indexRoute,
  childRoutes: [
    diaryRoute,
    registerRoute,
    loginRoute,
    logoutRoute
  ],
};
