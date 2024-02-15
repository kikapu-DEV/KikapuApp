import { FlatList, Text, View } from "react-native";
import styles from "./order.style";
import { OrderCard } from "../../../components";
import { useQuery } from "@tanstack/react-query";
import { getOrdersMade } from "../../../services/Orders";
import Spinner from "../../../components/Spinner/spinner";

function Order() {
	const staticData = [1, 2, 3, 4, 5];
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["ordersMade"],
		queryFn: getOrdersMade,
	});

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;
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
