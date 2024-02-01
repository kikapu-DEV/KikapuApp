import { Image, Text, View } from "react-native";
import styles from "./orderCard.style";
import { images } from "../../../constants";

function OrderCard({ item }) {
	if (item === undefined) return null;
	return (
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
	);
}

export default OrderCard;
