import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import styles from "./swipeBtn.style";

function SwipeBtn() {
  return (
    <View style={styles.container}>
      <Feather name="arrow-right" size={24} color={COLORS.secondary} />
    </View>
  );
}

export default SwipeBtn;
