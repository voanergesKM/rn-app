import { useCallback } from 'react';
import { View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/LoginScreen';
import { Register } from './src/screens/RegisterScreen';
import { style } from './src/components/AppPage.styled';

const Stack = createNativeStackNavigator();

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
    <View style={style.container} onLayout={onLayoutRootView}>
      <ImageBackground style={style.image} source={require('./assets/images/mainBgImage.jpg')}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}
