import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CLHeader.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function CLHeader({ name }) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Home")}>
				<Ionicons name='chevron-back-circle-outline' size={24} color='black' />
			</TouchableOpacity>

			<Text style={{ fontWeight: "500" }}>{name}</Text>
			<Ionicons name='md-search-outline' size={24} color='black' />
		</View>
	);
}

export default CLHeader;
