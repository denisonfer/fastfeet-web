import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { loginSuccess, loginFailure } from './actions';
import history from '../../../services/history';
import api from '../../../services/api';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessao', { email, password });

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    yield put(loginSuccess(response.data));

    history.push('dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados!');

    yield put(loginFailure());

    history.push('/');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logout() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/LOGOUT', logout),
]);
