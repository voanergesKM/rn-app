import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  FormButton,
  FormButtonText,
  FormContainer,
  Input,
  PasswordField,
  PasswordIcon,
} from './AuthForm.styled';

export const AuthForm = ({
  register = null,
  isShowedKeyboard,
  formData,
  setFormData,
  onSubmit,
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <FormContainer>
      {register && (
        <View style={{ marginBottom: 16 }}>
          <Input
            placeholder="Login"
            onFocus={isShowedKeyboard}
            onChangeText={value => setFormData(prevstate => ({ ...prevstate, login: value }))}
            value={formData.login}
          />
        </View>
      )}
      <View style={{ marginBottom: 16 }}>
        <Input
          placeholder="E-mail"
          onFocus={isShowedKeyboard}
          onChangeText={value => setFormData(prevstate => ({ ...prevstate, email: value }))}
          value={formData.email}
        />
      </View>
      <PasswordField>
        <Input
          placeholder="Password"
          secureTextEntry={secure}
          onFocus={isShowedKeyboard}
          onChangeText={value => setFormData(prevstate => ({ ...prevstate, password: value }))}
          value={formData.password}
        />
        <PasswordIcon onPress={() => setSecure(prev => !prev)}>
          {secure ? (
            <Icon name="eye-outline" color="#1B4371" size={25} />
          ) : (
            <Icon name="eye-off-outline" color="#1B4371" size={25} />
          )}
        </PasswordIcon>
      </PasswordField>
      <FormButton onPress={onSubmit}>
        <FormButtonText>{register ? 'SIGN UP' : 'SIGN IN'}</FormButtonText>
      </FormButton>
    </FormContainer>
  );
};
