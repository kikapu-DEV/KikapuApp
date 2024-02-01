import { FlatList, Text, View } from "react-native";
import styles from "./Received.styles";
import { OrderCard } from "../../../components";
import { useQuery } from "@tanstack/react-query";
import { getOrdersReceived } from "../../../services/Orders";
import Spinner from "../../../components/Spinner/spinner";

function ReceivedOrders() {
	const staticData = [];
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["ordersReceived"],
		queryFn: getOrdersReceived,
	});

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Received orders</Text>

			<View style={styles.orderListContainer}>
				<FlatList
					data={data.orders}
					keyExtractor={(item, index) => index.toString()}
					ListEmptyComponent={() => <Text>No orders received yet</Text>}
					renderItem={({ item }) => <OrderCard item={item} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}

export default ReceivedOrders;
