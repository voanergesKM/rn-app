import { useCallback, useState } from 'react';
import {
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Login } from './src/screens/LoginScreen';
import { Register } from './src/screens/RegisterScreen';
import { styles } from './src/components/AppPage.styled';

export default function App() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

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

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground style={styles.image} source={require('./assets/images/mainBgImage.jpg')}>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inner}
          >
            {/* <Register isKeyboardShown={isKeyboardShown} toggleKeyboard={setIsKeyboardShown} /> */}
            <Login isKeyboardShown={isKeyboardShown} toggleKeyboard={setIsKeyboardShown} />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}
