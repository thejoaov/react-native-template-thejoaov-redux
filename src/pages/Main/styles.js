import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 30px;
`;

export const GithubUserInput = styled.TextInput`
  height: 50px;
  width: 280px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  margin: 20px 0;
  border: 2px;
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
  background-color: #999;
`;

export const LogoutButton = styled.TouchableOpacity`
  height: 50px;
  width: 280px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #34b6;
  border-radius: 5px;
`;
