import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./availableNear.style";
import { SIZES } from "../../constants";
import AvailableCard from "../availableCard/AvailableCard";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../../services/Students";



function AvailableNear() {
  const navigation = useNavigation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getRestaurants"],
    queryFn: getRestaurants,
  });


  const handleCardPress = (restaurantId, restaurantName) => {
    navigation.navigate("menu", { restaurantId: restaurantId, restaurantName });
    console.log(restaurantId);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;
  if (!data) return null;

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
          data={data.data}
          ListEmptyComponent={() => <Text>No Restaurants yet</Text>}
          renderItem={({ item }) => (
            <AvailableCard
              item={item}
              handleCardPress={() =>
                handleCardPress(item.restaurantId, item.restaurantName)
              }
            />
          )}
          contentContainerStyle={{ columnGap: SIZES.xLarge }}
          horizontal
        />
      </View>
    </View>
  );
}

export default AvailableNear;
