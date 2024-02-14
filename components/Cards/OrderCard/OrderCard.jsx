import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./orderCard.style";
import { images } from "../../../constants";
import {useNavigation} from '@react-navigation/native'

function OrderCard({ item }) {
	if (item === undefined) return null;
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={()=> navigation.navigate("orderDetail")}>
		<View style={styles.container}>
			<View>
				<Image source={images.restFood} resizeMode='contain' />
			</View>
			<View style={styles.leftContent}>
				<Text style={styles.text1}>{item.orderId}</Text>
				<Text style={styles.text2}>Ksh. {item.totalOrderAmount}</Text>
				<Text style={styles.text3}>
					{new Date(item.orderDate).toLocaleString("en-GB")}{" "}
				</Text>
				<View style={styles.statusBtn}>
					<Text style={styles.statusTxt}>{item.orderStatus}</Text>
				</View>
			</View>
		</View>
		</TouchableOpacity>
	);
}

export default OrderCard;
