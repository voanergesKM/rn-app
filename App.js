import { useCallback, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Register } from './src/screens/auth';
// import { Register } from './src/screens/RegisterScreen';
import { style } from './src/components/AppPage.styled';
import { PostsScreen } from './src/screens/main/PostsScreen';
import { ProfileScreen } from './src/screens/main/ProfileScreen';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
// const MainTab = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
        {!isLoggedIn ? (
          <NavigationContainer>
            <AuthStack.Navigator>
              <AuthStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
              <AuthStack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={Register}
              />
            </AuthStack.Navigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <MainTab.Navigator>
              <MainTab.Screen name="Posts" component={PostsScreen} />
              <MainTab.Screen name="Profile" component={ProfileScreen} />
            </MainTab.Navigator>
          </NavigationContainer>
        )}
      </ImageBackground>
    </View>
  );
}
