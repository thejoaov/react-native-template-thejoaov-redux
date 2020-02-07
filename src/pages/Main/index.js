import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import api from '~/services/api';

import {
  Container,
  GithubUserButton,
  GithubUserInput,
  GithubUserPhoto,
  Title,
} from './styles';

export default function Main() {
  const [value, onChangeText] = useState('');
  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    user.avatar_url ? setVisible(true) : setVisible(false);
  }, [user]);

  async function searchUser() {
    const { data } = await api.get(`/users/${value}`);
    setUser(data);
  }

  return (
    <Container>
      <Title>Hello World!</Title>
      {!visible ? (
        <>
          <Text>Type a Github username</Text>
          <GithubUserInput
            onChangeText={text => onChangeText(text)}
            value={value}
            autoCapitalize="none"
          />
          <GithubUserButton onPress={() => searchUser()}>
            <Text>Search!</Text>
          </GithubUserButton>
        </>
      ) : (
        <>
          <GithubUserPhoto source={{ uri: user.avatar_url }} />
          <Text>{user.name}</Text>
          <GithubUserButton onPress={() => setVisible(false)}>
            <Text>Search Again!</Text>
          </GithubUserButton>
        </>
      )}
    </Container>
  );
}
