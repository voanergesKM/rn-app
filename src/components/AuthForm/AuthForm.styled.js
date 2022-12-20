import styled from 'styled-components/native';

export const FormContainer = styled.View`
  margin: 0 16px 16px 16px;
`;

export const Input = styled.TextInput`
  color: #212121;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  font-family: 'Roboto-Regular';
`;

export const PasswordField = styled.View`
  position: relative;
  margin-bottom: 43px;
`;

export const PasswordIcon = styled.TouchableOpacity`
  position: absolute;
  top: 25%;
  right: 16px;
`;

export const FormButton = styled.TouchableOpacity`
  background-color: #ff6c00;
  padding: 16px 0;
  border-radius: 100px;
`;

export const FormButtonText = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto-Regular;
`;
