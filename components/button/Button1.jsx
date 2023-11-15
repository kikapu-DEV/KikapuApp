import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { register, login } from "../../services/Auth";

import styles from "./button1.style";
function Button1({ title, screenName, color, formData = null }) {
	const navigation = useNavigation();
	console.log(screenName);

	return (
		<TouchableOpacity onPress={() => navigation.navigate(screenName)}>
			<View style={styles.btn1(color)}>
				<Text style={styles.btn1Text}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default Button1;
