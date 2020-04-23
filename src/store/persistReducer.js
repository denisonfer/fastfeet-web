import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducer) => {
  const persistedReducers = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['auth', 'usuario'],
    },
    reducer
  );

  return persistedReducers;
};
