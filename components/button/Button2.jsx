import { Text, TouchableOpacity, View } from "react-native";
import styles from "./button2.style";

function Button2({ icon, title }) {
  return (
    // WALLET BUTTON
    <TouchableOpacity>
      <View style={styles.btnContainer}>
        <View style={styles.btn2}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button2;
