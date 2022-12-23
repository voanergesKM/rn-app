import styled from 'styled-components/native';

export const CreateContainer = styled.View`
  flex: 1;
  /* align-items: center; */
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ImageWrapper = styled.View`
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  height: 240px;
  width: 100%;
  margin-bottom: 8px;
`;

export const AddImageButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export const CreatePostText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
`;

export const Input = styled.TextInput`
  font-family: 'Roboto-Regular';
  color: #212121;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e8e8e8;
  /* border: 1px solid #e8e8e8; */
  padding: 15px 0;
  font-size: 16px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  background: #f6f6f6;
  border-radius: 100px;
  padding: 16px 0;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #bdbdbd;
`;

export const DeleteButton = styled.TouchableOpacity`
  background: #f6f6f6;
  border-radius: 20px;
  width: 70px;
  height: 40px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
