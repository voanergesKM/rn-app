import { StyleSheet, View, ImageBackground, Platform, KeyboardAvoidingView } from 'react-native';
import { Login } from './src/screens/LoginScreen';
import { Register } from './src/screens/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/images/mainBgImage.jpg')}>
        {/* <Register /> */}
        <Login />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    color: 'tomato',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
});
