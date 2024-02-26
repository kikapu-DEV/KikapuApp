import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./availableNear.style";
import { SIZES } from "../../constants";
import AvailableCard from "../availableCard/AvailableCard";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../../services/Students";
import { useIsFocused } from "@react-navigation/native";

function AvailableNear() {
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const { data, isLoading, error } = useQuery({
		queryKey: ["getRestaurants"],
		queryFn: getRestaurants,
		enabled: isFocused,
	});

	const handleCardPress = () => {
		navigation.navigate("menu");
	};
	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;
	if (!data) return null;

	// console.log("restaurants", data.data);
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
						<AvailableCard item={item} handleCardPress={handleCardPress} />
					)}
					contentContainerStyle={{ columnGap: SIZES.xLarge }}
					horizontal
				/>
			</View>
		</View>
	);
}

export default AvailableNear;
