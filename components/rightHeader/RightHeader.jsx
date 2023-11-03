import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./rightHeader.style";
import { COLORS } from "../../constants";

function RightHeader({ handlePress, userName }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Ionicons name="location" size={24} color={COLORS.primary} />
      </TouchableOpacity>
      <View>
        <Text style={styles.location}>Your location</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
    </View>
  );
}

export default RightHeader;
