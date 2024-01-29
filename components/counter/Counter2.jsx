import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./Counter2.style";
import { useState } from "react";
import { COLORS } from "../../constants";

function Counter2() {
	const [count, setCount] = useState(1);
	const handleAdd = () => {
		setCount((prevState) => prevState + 1);
	};
	const handleSub = () => {
		setCount((prevState) => (prevState > 1 ? prevState - 1 : prevState));
	};

	return (
		<View>
			<View style={styles.container}>
				<TouchableOpacity onPress={handleSub}>
					<Entypo name='minus' size={22} color='black' style={styles.icon} />
				</TouchableOpacity>
				<Text>{count}</Text>
				<TouchableOpacity onPress={handleAdd}>
					<Entypo
						name='plus'
						size={22}
						color={COLORS.whiteText}
						style={styles.icon2}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Counter2;
