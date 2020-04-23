import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './usuario/reducer';

const reducers = combineReducers({
  auth,
  user,
});

export default reducers;
