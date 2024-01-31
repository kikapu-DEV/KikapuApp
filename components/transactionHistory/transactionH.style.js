import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	transactionContainer: {
		flex: 1,
		padding: 20,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	headerTitle: {
		fontSize: SIZES.medium,
		color: COLORS.primary,
		marginTop: 10,
		fontWeight: "bold",
	},
	headerBtn: {
		fontSize: SIZES.medium,
		color: COLORS.secondary,
	},
	ListContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		// marginTop: 20,
		marginBottom: 20,
	},
	ListSubContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		gap: 15,
	},
	restLogo: {
		width: 40,
		height: 40,
		backgroundColor: "#4368C7",
		borderRadius: 50,
	},
	restName: {
		fontWeight: "500",
	},
	Time: {
		color: COLORS.grey,
	},
	amount: {
		color: COLORS.primary,
		// fontSize: 15
	},
});

export default styles;
