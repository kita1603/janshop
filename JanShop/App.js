import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, NewRivals, ProductDetails, LoginPage, Orders, Favourites, SignUp, Intro } from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    
  });

  const onLayoutRootView = useCallback(async() =>{

    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name = 'Intro'
          component={Intro}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'Cart'
          component={Cart}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'ProductDetails'
          component={ProductDetails}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'ProductList'
          component={NewRivals}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'Login'
          component={LoginPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'Orders'
          component={Orders}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'Favourites'
          component={Favourites}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name = 'SignUp'
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


