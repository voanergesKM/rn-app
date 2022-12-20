import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 100%;
  justify-content: center;
  padding-top: ${p => (p.register ? '92px' : '32px')};
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-bottom: ${p => (p.isKeyboardShown ? '20px' : '78px')};
`;

export const Title = styled.Text`
  font-size: 30px;
  line-height: 35px;
  color: #212121;
  margin-bottom: 33px;
  text-align: center;
  font-family: 'Roboto-Regular';
  font-weight: 500;
`;

export const FormText = styled.Text`
  text-align: center;
  color: #1b4371;
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const Avatar = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
  /* transform: translate(60px, 50px); */
`;

export const AvatarIcon = styled.TouchableOpacity`
  position: absolute;
  right: -14px;
  bottom: 14px;
`;

export const styles = StyleSheet.create({
  avatar: {
    transform: [{ translateY: -60 }, { translateX: Dimensions.get('window').width * 0.5 - 60 }],
  },
});
