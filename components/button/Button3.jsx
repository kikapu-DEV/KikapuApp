import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./button3.style";
import { useSelector, useDispatch } from "react-redux";
import {
	addItemToCart,
	removeItemFromCart,
} from "../../store/reducers/cartSlice";

function Button3({ title, screenName, color, iconName, product }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const addToCart = async (item) => {
		// console.log("item", item);
		dispatch(
			addItemToCart({
				id: item.id,
				name: item.name,
				price: item.price,
				quantity: 1,
				image: item.image,
			})
		);
	};

	return (
		<View>
			<TouchableOpacity
				onPress={()=> navigation.navigate(screenName)}
				// onPress={async () => {
				// 	console.log("screen name", screenName);
				// 	await addToCart(product);
				// 	navigation.navigate(screenName);
				// }}
			>
				<View style={styles.btn1(color)}>
					<Ionicons name={iconName} size={24} color='white' />
					<Text style={styles.btn1Text}>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default Button3;
