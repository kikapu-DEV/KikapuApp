import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StudentHome from "../studentHome/StudentHome";
import { Ionicons } from "@expo/vector-icons";
import Wallet from "../wallet/Wallet";
import Order from "../StudentOrders/Order";
import Profile from "../profile/Profile";
import { COLORS } from "../../../constants";

const Tab = createBottomTabNavigator();

// names
const home = "Home";
const wallet = "Wallet";
const orders = "Orders";
const profile = "Profile";

const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused, color, size }) => {
		let iconName;
		let routeName = route.name;
		if (routeName === home) {
			iconName = focused ? "home" : "home-outline";
		} else if (routeName === wallet) {
			iconName = focused ? "wallet" : "wallet-outline";
		} else if (routeName === orders) {
			iconName = focused ? "cart" : "cart-outline";
		} else if (routeName === profile) {
			iconName = focused ? "person" : "person-outline";
		}

		return <Ionicons name={iconName} size={size} color={color} />;
	},
	tabBarActiveTintColor: COLORS.secondary,
	tabBarLabelStyle: { fontSize: 12 },
});

function Main() {
	return (
		<Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
			<Tab.Screen
				name={home}
				component={StudentHome}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name={wallet}
				component={Wallet}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name={orders}
				component={Order}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name={profile}
				component={Profile}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
}

export default Main;
