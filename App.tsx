// import React from 'react';
// import {View, ScrollView, Text} from 'react-native';
// import Login from './src/Login/Login';
// import About from './src/About/About';
// import Welcome from './src/Welcome/Welcome';
// import Splash from './src/Splash/SplashScreen';
// import Register from './src/Register/Register';
// import Home from './src/Home/Home';
// export default function App() {
//   return (
//     <ScrollView>
//       <View>
//         {/* <About /> */}
//         <Welcome />
//         {/* <Login /> */}
//         {/* <Splash /> */}
//         {/* <Register/> */}
//         {/* <Home/> */}
//       </View>
//     </ScrollView>
//   );
// }


import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// import Welcome from './src/Welcome/Welcome';
import Login from "./src/Login/Login";
import SplashScreen from "./src/Splash/SplashScreen";
import  Home  from "./src/Home/Home";
import Register from "./src/Register/Register";
import About from "./src/About/About";
import { Welcome } from "./src/Welcome/Welcome";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashSCreen">
        <Stack.Screen name="Splashscreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
