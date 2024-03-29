import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import RestHome from "../RestaurantHome/RestHome";
import Wallet from "../../StudentScreens/wallet/Wallet";
import Profile from "../../StudentScreens/profile/Profile";
import Order from "../../StudentScreens/StudentOrders/Order";
import RestAddMenu from "../RestAddMenu/RestAddMenu";
import TopNavigation from "../TopNavigator/TopNavigation";

const Tab = createBottomTabNavigator();

// names
const home = "Home";
const wallet = "Wallet";
const orders = "Orders";
const profile = "Profile";
const add = "Add";

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    let routeName = route.name;
    if (routeName === home) {
      iconName = focused ? "home" : "home-outline";
    } else if (routeName === wallet) {
      iconName = focused ? "wallet" : "wallet-outline";
    } else if (routeName === add) {
      iconName = focused ? "add-circle" : "add-circle-outline";
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

function RestMain() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name={home}
        component={RestHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={wallet}
        component={Wallet}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={add}
        component={RestAddMenu}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={orders}
        component={TopNavigation}
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

export default RestMain;
