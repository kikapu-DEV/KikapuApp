import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Onboarding, Signup } from './screens';
import { COLORS } from './constants';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor={COLORS.primary} barStyle="default"/>
        <Stack.Navigator initialRouteName='onBoarding'>
            <Stack.Screen name='onBoarding' component={Onboarding}
            options={{
              title: '',
              headerShadowVisible: false,
              headerStyle: {backgroundColor: COLORS.primary}
            }}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="signup" component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
