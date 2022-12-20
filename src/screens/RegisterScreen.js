import { useEffect, useState } from 'react';
import { Keyboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Avatar, AvatarIcon, Container, FormText, styles, Title } from './AuthScreen.styled';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const Register = ({ isKeyboardShown, toggleKeyboard }) => {
  const [formData, setFormData] = useState(initialState);

  const isShowedKeyboard = () => {
    toggleKeyboard(true);
  };

  const hideKeyboard = () => {
    toggleKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (!formData.login || !formData.email || !formData.password) {
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
    <Container register isKeyboardShown={isKeyboardShown}>
      <Title>Register</Title>
      <Avatar style={styles.avatar}>
        <AvatarIcon>
          <Icon name="add-circle-outline" color="#FF6C00" size={25} />
        </AvatarIcon>
      </Avatar>
      <AuthForm
        toggleKeyboard={toggleKeyboard}
        isShowedKeyboard={isShowedKeyboard}
        initialState={initialState}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        register
      />
      <FormText>Have an account? LogIn</FormText>
    </Container>
  );
};
