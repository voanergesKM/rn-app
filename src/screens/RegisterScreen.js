import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export const Register = ({ isKeyboardShown, toggleKeyboard }) => {
  const [secure, setSecure] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const isShowedKeyboard = () => {
    toggleKeyboard(true);
  };

  const hideKeyboard = () => {
    toggleKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', hideKeyboard);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide', hideKeyboard);
    };
  }, []);

  return (
    <View style={{ ...styles.formContainer, paddingBottom: isKeyboardShown ? 20 : 78 }}>
      <Text style={styles.formTitle}>Register</Text>
      <View style={styles.avatar}>
        <TouchableOpacity style={styles.addIconAvatar}>
          <Icon name="add-circle-outline" color="#FF6C00" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            onFocus={isShowedKeyboard}
            onChangeText={value => setFormData(prevstate => ({ ...prevstate, login: value }))}
            value={formData.login}
          />
        </View>
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
            onChangeText={value => setFormData(prevstate => ({ ...prevstate, password: value }))}
            value={formData.password}
          />
          <TouchableOpacity style={styles.togglePwdIcon} onPress={() => setSecure(prev => !prev)}>
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
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      {/* <View> */}
      <Text style={styles.formText}>Have an account? LogIn</Text>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 92,
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
    fontFamily: 'Roboto-Regular',
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
    fontFamily: 'Roboto-Regular',
  },

  formText: {
    textAlign: 'center',
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },

  inner: {
    flex: 1,
    justifyContent: 'flex-end',
    fontSize: 16,
  },
});
