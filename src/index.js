import React from 'react';

import '~/config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '~/store';

import Bootstrap from './bootstrap';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Bootstrap />
    </PersistGate>
  </Provider>
);

export default App;
