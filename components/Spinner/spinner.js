import { ActivityIndicator, View } from "react-native";
import styles from "./spinner.style";

export default Spinner = ({ size }) => (
	<View style={[styles.container, styles.horizontal]}>
		<ActivityIndicator size={size ? size : "small"} />
	</View>
);
