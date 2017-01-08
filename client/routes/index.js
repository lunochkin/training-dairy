import indexRoute from './index/index.js';
import diaryRoute from './diary';
import signupRoute from './signup';

export default {
  path: '/',
  indexRoute,
  childRoutes: [
    diaryRoute,
    signupRoute
  ],
};
