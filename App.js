import { StyleSheet, View, ImageBackground, Platform, KeyboardAvoidingView } from 'react-native';
import { Register } from './src/screens/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/images/mainBgImage.jpg')}>
        <Register />
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
