import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from 'react-native';
import { Container, LoginButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>User is not signed, sign in.</Text>
      <LoginButton onPress={() => dispatch(signInTest())}>Sign In</LoginButton>
    </Container>
  );
}
