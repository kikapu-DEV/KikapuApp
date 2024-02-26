import { View } from "react-native";
import Order from "../../StudentScreens/StudentOrders/Order";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReceivedOrders from "../ReceivedOrders/ReceivedOrders";

const Tab = createMaterialTopTabNavigator();
function TopNavigation() {
	return (
		<Tab.Navigator
			initialRoute='Received Orders'
			screenOptions={{
				lableStyle: { fontSize: 12 },
				style: { backgroundColor: "white" },
			}}
		>
			<Tab.Screen name='Received Orders' component={ReceivedOrders} />
			<Tab.Screen name='My Orders' component={Order} />
		</Tab.Navigator>
	);
}

export default TopNavigation;
