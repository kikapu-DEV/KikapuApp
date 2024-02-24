import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./counter.style";
// import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function Counter({ count, onCountChange }) {
	const [localCount, setLocalCount] = useState(1);
	const handleAdd = () => {
		setLocalCount((prevState) => prevState + 1);
		onCountChange(localCount + 1);
	};
	const handleSub = () => {
		setLocalCount((prevState) => (prevState > 1 ? prevState - 1 : prevState));
		onCountChange(localCount - 1);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleSub}>
				<Entypo name='minus' size={20} color='black' />
			</TouchableOpacity>
			<Text>{count}</Text>
			<TouchableOpacity onPress={handleAdd}>
				<Entypo name='plus' size={20} color='black' />
			</TouchableOpacity>
		</View>
	);
}

export default Counter;
