import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		padding: 5,
		borderColor: COLORS.grey,
		width: 80,
	},
	sign: {
		fontSize: 20,
	},
	icon: {
		backgroundColor: COLORS.grey3,
		borderRadius: 20,
	},
	icon2: {
		backgroundColor: COLORS.secondary,
		borderRadius: 20,
	},
});

export default styles;
