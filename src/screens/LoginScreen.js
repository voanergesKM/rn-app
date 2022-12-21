import { useEffect, useState } from 'react';
import {
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Container, FormText, Title } from './AuthScreen.styled';
import { style } from '../components/AppPage.styled';

const initialState = {
  email: '',
  password: '',
};

export const Login = ({ navigation }) => {
  const [formData, setFormData] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const isShowedKeyboard = () => {
    setIsKeyboardShown(true);
  };

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
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
    <ImageBackground style={style.image} source={require('../../assets/images/mainBgImage.jpg')}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={style.inner}
        >
          <Container isKeyboardShown={isKeyboardShown}>
            <Title>Sign In</Title>
            <AuthForm
              isShowedKeyboard={isShowedKeyboard}
              initialState={initialState}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <FormText>Don't have an account? Register</FormText>
            </TouchableOpacity>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
