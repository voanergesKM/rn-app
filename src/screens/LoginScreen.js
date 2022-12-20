import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { AuthForm } from '../components/AuthForm/AuthForm';

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
    <View style={{ ...styles.formContainer, paddingBottom: isKeyboardShown ? 20 : 78 }}>
      <Text style={styles.formTitle}>Sign In</Text>
      <AuthForm
        toggleKeyboard={toggleKeyboard}
        isShowedKeyboard={isShowedKeyboard}
        initialState={initialState}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <Text style={styles.formText}>Don't have an account? Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 32,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formTitle: {
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    marginBottom: 33,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  },

  formText: {
    textAlign: 'center',
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
