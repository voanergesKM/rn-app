import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const Login = () => {
  const [secure, setSecure] = useState(true);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const isShowedKeyboard = () => {
    setIsKeyboardShown(true);
  };

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', hideKeyboard);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide', hideKeyboard);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <View style={{ ...styles.formContainer, paddingBottom: isKeyboardShown ? 20 : 78 }}>
          <Text style={styles.formTitle}>Sign In</Text>
          <View style={styles.form}>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onFocus={isShowedKeyboard}
                onChangeText={value => setFormData(prevstate => ({ ...prevstate, email: value }))}
                value={formData.email}
              />
            </View>
            <View style={styles.passContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={secure}
                onFocus={isShowedKeyboard}
                onChangeText={value =>
                  setFormData(prevstate => ({ ...prevstate, password: value }))
                }
                value={formData.password}
              />
              <TouchableOpacity
                style={styles.togglePwdIcon}
                onPress={() => setSecure(prev => !prev)}
              >
                {secure ? (
                  <Icon name="eye-outline" color="#1B4371" size={25} />
                ) : (
                  <Icon name="eye-off-outline" color="#1B4371" size={25} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.formBtn}
              onPress={() => {
                hideKeyboard();
                setFormData(initialState);
              }}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          {/* <View> */}
          <Text style={styles.formText}>Don't have an account? Register</Text>
          {/* </View> */}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: 'relative',
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    // paddingBottom: 78,
    // marginBottom: 78,
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
  },

  avatar: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    width: 120,
    height: 120,
    transform: [{ translateY: -60 }, { translateX: Dimensions.get('window').width * 0.5 - 60 }],
  },

  addIconAvatar: {
    position: 'absolute',
    right: -14,
    bottom: 14,
  },

  form: {
    // flexDirection: 'column',
    marginHorizontal: 16,
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
    fontSize: 16,
    color: '#212121',
    borderRadius: 8,
  },

  passContainer: {
    position: 'relative',
    marginBottom: 43,
  },

  togglePwdIcon: {
    position: 'absolute',
    top: '25%',
    right: 16,
  },

  formBtn: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 16,
  },

  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },

  formText: {
    textAlign: 'center',
    color: '#1B4371',
  },

  inner: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'flex-end',
    fontSize: 16,
    // alignItems: 'center',
  },
});
