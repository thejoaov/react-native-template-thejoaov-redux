import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'app',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
