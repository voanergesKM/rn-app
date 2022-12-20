import { useEffect, useState } from 'react';
import { Keyboard, Alert } from 'react-native';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Container, FormText, Title } from './AuthScreen.styled';

const initialState = {
  email: '',
  password: '',
};

export const Login = ({ isKeyboardShown, toggleKeyboard }) => {
  const [formData, setFormData] = useState(initialState);

  const isShowedKeyboard = () => {
    toggleKeyboard(true);
  };

  const hideKeyboard = () => {
    toggleKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (!formData.email || !formData.password) {
      return Alert.alert('Error', 'Please, enter your email or password');
    }

    console.log(formData);
    hideKeyboard();
    setFormData(initialState);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', hideKeyboard);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide', hideKeyboard);
    };
  }, []);

  return (
    <Container isKeyboardShown={isKeyboardShown}>
      <Title>Sign In</Title>
      <AuthForm
        toggleKeyboard={toggleKeyboard}
        isShowedKeyboard={isShowedKeyboard}
        initialState={initialState}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <FormText>Don't have an account? Register</FormText>
    </Container>
  );
};
