import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./availableNear.style";
import { SIZES } from "../../constants";
import AvailableCard from "../availableCard/AvailableCard";
import { useNavigation } from "@react-navigation/native";

function AvailableNear() {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("menu");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available Near You</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* available near you list */}
      <View style={styles.cardsContainer}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => <AvailableCard handleCardPress={handleCardPress} />}
          contentContainerStyle={{ columnGap: SIZES.xLarge }}
          horizontal
        />
      </View>
    </View>
  );
}

export default AvailableNear;
