import {
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./transactionH.style";

function TransactionH({ transactions }) {
	// console.log("transactions", transactions[1].amount);
	return (
		<View style={styles.transactionContainer}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Last Transaction</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>See All</Text>
				</TouchableOpacity>
			</View>

			{/* transaction list */}
			<FlatList
				data={transactions}
				ListEmptyComponent={() => <Text>No transactions yet</Text>}
				keyExtractor={(item, index) => index.toString()}
				renderItem={(item) => (
					<View style={styles.ListContainer}>
						<View style={styles.ListSubContainer}>
							<View style={styles.restLogo}></View>
							<View>
								<Text style={styles.restName}>
									{item.item.transactionId.length > 20
										? item.item.transactionId.slice(0, 20) + "..."
										: item.item.transactionId}
								</Text>
								<Text style={styles.Time}>
									{new Date(item.item.transactionDate).toLocaleString("en-GB")}
								</Text>
							</View>
						</View>
						<View>
							<Text style={styles.amount}>
								Ksh. {item.item.transactionType === "deposit" ? "+" : "-"}
								{item.item.amount}
							</Text>
						</View>
					</View>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

export default TransactionH;
