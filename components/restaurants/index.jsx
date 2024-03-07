import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./RLR.style";
import { SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../../services/Students";
import MealCard from "../mealCard";

function RestaurantListRow({ restaurant }) {
  const navigation = useNavigation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getMenus", restaurant.restaurantId],
    queryFn: getMenus,
  });

  const handleCardPress = (meal) => {
    navigation.navigate("studentProduct", { meal });
  };

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;
  if (!data) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{restaurant.restaurantName}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* available near you list */}
      <View style={styles.cardsContainer}>
        <FlatList
          data={data.data}
          ListEmptyComponent={() => <Text>No menus yet</Text>}
          renderItem={({ item }) => (
            <MealCard
              item={item}
              handleCardPress={() =>
                handleCardPress(item)
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

export default RestaurantListRow;
