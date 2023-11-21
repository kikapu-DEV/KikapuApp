import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategoryItems,
  FarmerMainApp,
  Login,
  Main,
  Onboarding,
  RID,
  RestMain,
  Signup,
  StudentCheckout,
  StudentMenu,
  StudentPayment,
  StudentProduct,
  Success,
  Verify,
} from "./screens";
import { COLORS } from "./constants";
import { SemiCircle, SemiCircle2 } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={COLORS.primary} barStyle='default' />
			<Stack.Navigator initialRouteName='onboarding'>
				<Stack.Screen
					name='onBoarding'
					component={Onboarding}
					options={{
						title: "",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: COLORS.primary },
					}}
				/>
				<Stack.Screen
					name='login'
					component={Login}
					options={{
						headerTitle: "",
						headerShadowVisible: false,
						headerStyle: {
							backgroundColor: "transparent",
						},
						headerLeft: () => <SemiCircle title='LOG IN' />,
					}}
				/>
				<Stack.Screen
					name='signup'
					component={Signup}
					options={{
						headerTitle: "",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "transparent" },
						headerLeft: () => <SemiCircle title='SIGN UP' />,
					}}
				/>
				<Stack.Screen
					name='verify'
					component={Verify}
					options={{
						headerTitle: "",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "transparent" },
						headerLeft: () => <SemiCircle2 screenName='signup' />,
					}}
				/>
				<Stack.Screen
					name='mainApp'
					component={Main}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='menu'
					component={StudentMenu}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='studentPayment'
					component={StudentPayment}
					options={{
						headerTitle: "Payment Summary",
						headerShadowVisible: false,
						headerTitleStyle: {
							fontWeight: "400",
						},
					}}
				/>
				<Stack.Screen
					name='success'
					component={Success}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='studentProduct'
					component={StudentProduct}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='checkout'
					component={StudentCheckout}
					options={{
						headerShown: false,
					}}
				/>

        {/* restaurant main app */}
        <Stack.Screen
          name="restMainApp"
          component={RestMain}
          options={{
           headerShown: false
          }}
        />
         <Stack.Screen
          name="categoryItems"
          component={CategoryItems}
          options={{
           headerShown: false
          }}
        />
        <Stack.Screen
          name="restItemDetail"
          component={RID}
          options={{
           headerShown: false
          }}
        />

		{/* Farmer main app */}
		<Stack.Screen
          name="farmerMainApp"
          component={FarmerMainApp}
          options={{
           headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
