import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { store, persistor } from '~/store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
