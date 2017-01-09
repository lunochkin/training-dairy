import store from '../../store';
import { loadExercises, loadRecords } from '../../modules/diary';
import DiaryPage from './containers/DiaryPage';

export default {
  path: '/diary',
  component: DiaryPage,
  childRoutes: [],
  onEnter() {
    store.dispatch(loadExercises());
    store.dispatch(loadRecords());
  }
};
