import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Main from './pages/Main';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        NotSigned: createSwitchNavigator({
          SignIn,
        }),
        Signed: createSwitchNavigator({
          Main,
        }),
      },
      {
        initialRouteName: isSigned ? 'Signed' : 'NotSigned',
      }
    )
  );
