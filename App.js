import { useCallback } from 'react';
import { StyleSheet, View, ImageBackground, Platform, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Login } from './src/screens/LoginScreen';
import { Register } from './src/screens/RegisterScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
