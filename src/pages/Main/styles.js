import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

export const HelloWorld = styled.Text`
  font-size: 30px;
`;

export const GithubUserInput = styled.TextInput`
  height: 50px;
  width: 280px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  margin: 20px 0;
  border: 1px;
  border-color: #34b6ff;
`;

export const GithubUserButton = styled.TouchableOpacity`
  height: 50px;
  width: 280px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #34b6ff;
  border-radius: 5px;
  margin: 20px 0;
`;

export const GithubUserPhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 30px 0;
`;
