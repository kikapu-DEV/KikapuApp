import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AddCard,
	AddProduct,
	AddSuccess,
	CategoryItems,
	CreditCardDetail,
	FarmerMainApp,
	Login,
	Main,
	Onboarding,
	OrderDetail,
	RID,
	RestAddMeal,
	RestCart,
	RestMain,
	Signup,
	StudentCheckout,
	StudentMenu,
	StudentPayment,
	StudentProduct,
	Success,
	TopUp,
	Transfer,
	Verify,
} from "../screens";
import { COLORS } from "../constants";
import { Spinner } from "../components";
import useAuth from "../helpers/hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
	const { loading, userInfo } = useAuth();

	return loading ? (
    <Spinner size="large" />
  ) : (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="default" />
      <Stack.Navigator
        initialRouteName={
          userInfo
            ? userInfo.profile.role === "student" ||
              userInfo.profile.role === "customer"
              ? "mainApp"
              : userInfo.profile.role === "restaurant"
              ? "restMainApp"
              : "farmerMainApp"
            : "onBoarding"
        }
      >
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify"
          component={Verify}
          options={{
            headerShown: false,
          }}
        />

        {/* student main app */}
        <Stack.Screen
          name="mainApp"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="menu"
          component={StudentMenu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="studentPayment"
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
          name="success"
          component={Success}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="studentProduct"
          component={StudentProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="transfer"
          component={Transfer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          component={StudentCheckout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="topUp"
          component={TopUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addCard"
          component={AddCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="orderDetail"
          component={OrderDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="creditCardDetail"
          component={CreditCardDetail}
          options={{
            headerShown: false,
          }}
        />

        {/* restaurant main app */}
        <Stack.Screen
          name="restMainApp"
          component={RestMain}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="categoryItems"
          component={CategoryItems}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="restItemDetail"
          component={RID}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="restCart"
          component={RestCart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addMeal"
          component={RestAddMeal}
          options={{
            headerShown: false,
          }}
        />

        {/* Farmer main app */}
        <Stack.Screen
          name="farmerMainApp"
          component={FarmerMainApp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addProduct"
          component={AddProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addSuccess"
          component={AddSuccess}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
