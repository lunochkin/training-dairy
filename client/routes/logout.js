import store from '../store';
import { saveAuthToken } from '../modules/global';

export default {
  path: '/logout',
  onEnter: (nextState, replace) => {
    store.dispatch(saveAuthToken(''));
    replace('/');
  }
};
