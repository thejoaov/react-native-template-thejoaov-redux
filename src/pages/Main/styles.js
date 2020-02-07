import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2196f3;
`;

export const HelloWorld = styled.Text`
  font-size: 30px;
`;

export const GithubUserInput = styled.TextInput`
  height: 50px;
  width: 280px;
`;

export const GithubUserButton = styled.TouchableOpacity`
  height: 50px;
  width: 280px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const GithubUserPhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
