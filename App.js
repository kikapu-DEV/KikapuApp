import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Onboarding, Signup, Verify } from "./screens";
import { COLORS, SIZES } from "./constants";
import { SemiCircle, SemiCircle2 } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="default" />
      <Stack.Navigator initialRouteName="onBoarding">
        <Stack.Screen
          name="onBoarding"
          component={Onboarding}
          options={{
            title: "",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: COLORS.primary },
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => <SemiCircle title="LOG IN" />,
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "transparent" },
            headerLeft: () => <SemiCircle title="SIGN UP" />,
          }}
        />
        <Stack.Screen
        name="verify"
        component={Verify}
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: 'transparent'},
          headerLeft: ()=> <SemiCircle2 screenName="signup"/>
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
