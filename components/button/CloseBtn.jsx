import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./closeBtn.style";

function CloseBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <View style={styles.closeBtn}>
        <Ionicons name="md-close-outline" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}

export default CloseBtn;
