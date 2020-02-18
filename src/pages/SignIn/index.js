import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from 'react-native';
import { Container, LoginButton } from './styles';
import { signInTest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>User is not signed, sign in.</Text>
      <LoginButton onPress={() => dispatch(signInTest())}>
        <Text>Sign In</Text>
      </LoginButton>
    </Container>
  );
}
