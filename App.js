import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Colours } from './constant/Colours';

const Stack = createNativeStackNavigator();

function AuthStack(){
    return (

          
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colours.backgroundColour },
            headerTintColor: 'black',
            contentStyle: { backgroundColor: Colours.backgroundColour },
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Homepage" component={Homepage} />
        </Stack.Navigator>
    )
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      
      screenOptions={{
        headerStyle: { backgroundColor: Colours.backgroundColour },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colours.backgroundColour },
      }}
    >
      <Stack.Screen name="Welcome" component={Homepage} />
    </Stack.Navigator>
  );
}

function Navigation(){
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

function Root(){
    return (
        <Navigation />
    )
}


export default function App() {
  return (
    <>
     
      <StatusBar style='light'/>
      <Root/>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
