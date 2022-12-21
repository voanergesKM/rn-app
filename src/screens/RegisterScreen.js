import { useEffect, useState } from 'react';
import {
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Avatar, AvatarIcon, Container, FormText, styles, Title } from './AuthScreen.styled';
import { style } from '../components/AppPage.styled';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const Register = () => {
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
    const { login, email, password } = formData;

    if (!login || !email || !password) {
      return Alert.alert('Error', "Fields can't be empty");
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
          <Container register isKeyboardShown={isKeyboardShown}>
            <Title>Register</Title>
            <Avatar style={styles.avatar}>
              <AvatarIcon>
                <Icon name="add-circle-outline" color="#FF6C00" size={25} />
              </AvatarIcon>
            </Avatar>
            <AuthForm
              isShowedKeyboard={isShowedKeyboard}
              initialState={initialState}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              register
            />
            <FormText>Have an account? LogIn</FormText>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
