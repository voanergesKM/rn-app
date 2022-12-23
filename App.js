import { useCallback, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from './src/screens/auth';
// import { Register } from './src/screens/RegisterScreen';
import { style } from './src/components/AppPage.styled';
import { PostsScreen } from './src/screens/main/PostsScreen';
import { CreatePostsScreen } from './src/screens/main/CreatePostsScreen';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

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
        <NavigationContainer>
          {!isLoggedIn ? (
            <AuthStack.Navigator>
              <AuthStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
              <AuthStack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={Register}
              />
            </AuthStack.Navigator>
          ) : (
            <MainStack.Navigator>
              {/* <MainStack.Screen name="Posts" component={PostsScreen} /> */}
              <MainStack.Screen name="Create post" component={CreatePostsScreen} />
            </MainStack.Navigator>
          )}
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}
