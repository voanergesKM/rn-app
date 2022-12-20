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
import { AuthForm } from '../components/AuthForm/AuthForm';

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
    <View style={{ ...styles.formContainer, paddingBottom: isKeyboardShown ? 20 : 78 }}>
      <Text style={styles.formTitle}>Register</Text>
      <View style={styles.avatar}>
        <TouchableOpacity style={styles.addIconAvatar}>
          <Icon name="add-circle-outline" color="#FF6C00" size={25} />
        </TouchableOpacity>
      </View>
      <AuthForm
        toggleKeyboard={toggleKeyboard}
        isShowedKeyboard={isShowedKeyboard}
        initialState={initialState}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        register
      />
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
});
