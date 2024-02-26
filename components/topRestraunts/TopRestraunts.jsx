import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./toprest.style";
import { SIZES, images } from "../../constants";
import RestCard from "../restCard/RestCard";
import { getRestaurants } from "../../services/Students";
import Spinner from "../Spinner/spinner";
import { useQuery } from "@tanstack/react-query";
import { useIsFocused } from "@react-navigation/native";

const popularImages = [images.food1, images.food2, images.food3];

function TopRestraunts() {
	const isFocused = useIsFocused();
	const { data, isLoading, error } = useQuery({
		queryKey: ["getRestaurants"],
		queryFn: getRestaurants,
		enabled: isFocused,
	});

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;
	if (!data) return null;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Top restaurants</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>See All</Text>
				</TouchableOpacity>
			</View>

			{/* restaurants list */}
			<View style={styles.cardsContainer}>
				<FlatList
					data={data.data}
					keyExtractor={(item, index) => index.toString()}
					ListEmptyComponent={() => <Text>No Restaurants yet</Text>}
					renderItem={({ item }) => <RestCard item={item} />}
					contentContainerStyle={{ columnGap: SIZES.xSmall }}
					horizontal
				/>
			</View>
		</View>
	);
}

export default TopRestraunts;
