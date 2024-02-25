import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./button3.style";

function Button3({ title, screenName, color, iconName, pressHandler }) {
	return (
		<View>
			<TouchableOpacity
				onPress={async () => {
					console.log("screen name", screenName);
					pressHandler();
				}}
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
