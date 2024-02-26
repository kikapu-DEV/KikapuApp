import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import styles from "./bestSelling.style";
import { SIZES, images } from "../../constants";
import RestItemCard from "../Cards/RestItemCard/RestItemCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/Restaurants";
import Spinner from "../Spinner/spinner";

function BestSelling({ title }) {
	const isFocused = useIsFocused();
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
		enabled: isFocused,
	});
	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>{title}</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>See All</Text>
				</TouchableOpacity>
			</View>

			{/* list */}
			<View style={styles.listContainer}>
				<FlatList
					data={data.data}
					horizontal
					keyExtractor={(item, index) => index.toString()}
					ListEmptyComponent={() => <Text>No products yet</Text>}
					contentContainerStyle={{ columnGap: SIZES.xxLarge }}
					renderItem={({ item }) => (
						<RestItemCard
							img={images.lambMeat}
							title={item.name}
							qty={item.quantity}
							price={item.price}
							id={item._id}
						/>
					)}
				/>
			</View>
		</View>
	);
}

export default BestSelling;
