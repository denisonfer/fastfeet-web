import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './usuario/saga';

export default function* rootSaga() {
  yield all([auth, user]);
}
