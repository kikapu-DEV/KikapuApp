import { Text, TouchableOpacity, View } from "react-native";
import styles from "./button2.style";
import { useNavigation } from "@react-navigation/native";

function Button2({ icon, title, screenName }) {
  const navigation = useNavigation();
  return (
    // WALLET BUTTON
    <TouchableOpacity onPress={()=> navigation.navigate(screenName)}>
      <View style={styles.btnContainer}>
        <View style={styles.btn2}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button2;
