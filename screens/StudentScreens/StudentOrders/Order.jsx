import { FlatList, Text, View } from "react-native";
import styles from "./order.style";
import { OrderCard } from "../../../components";
import { useQuery } from "@tanstack/react-query";
import { useIsFocused } from "@react-navigation/native";
import { getOrdersMade } from "../../../services/Orders";
import Spinner from "../../../components/Spinner/spinner";

function Order() {
	const staticData = [1, 2, 3, 4, 5];
	const isFocused = useIsFocused();
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["ordersMade"],
		queryFn: getOrdersMade,
		enabled: isFocused,
	});

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;

	// console.log("orders", data);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Previous orders</Text>

			<View style={styles.orderListContainer}>
				<FlatList
					data={data}
					keyExtractor={(item, index) => index.toString()}
					ListEmptyComponent={() => <Text>No orders made yet</Text>}
					renderItem={({ item }) => <OrderCard item={item} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}

export default Order;
