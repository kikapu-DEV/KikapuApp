import { FlatList, Text, View } from "react-native";
import { Button2, TransactionH, WalletHeader } from "../../../components";
import styles from "./wallet.style";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants";
import { useQuery } from "@tanstack/react-query";
import { getWallet } from "../../../services/Wallet";
import Spinner from "../../../components/Spinner/spinner";

const iconList = [
	{ iconName: "exchange", title: "Transfer", screenName: "transfer" },
	{ iconName: "credit-card", title: "Payment", screenName: "studentPayment" },
	{ iconName: "plus", title: "Top-up", screenName: "topUp" },
];
function Wallet() {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["userWallet"],
		queryFn: getWallet,
	});

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;

	const wallet = data.wallet;
	// console.log("wallet", wallet);
	return (
		<View style={styles.container}>
			<WalletHeader />
			{/* wallet card */}
			<View style={styles.walletCardContainer}>
				<View style={styles.walletCard}>
					<View style={styles.leftContent}>
						<Text style={styles.leftContentText}>Balance</Text>
						<Text style={styles.leftContentText2}>Ksh. {wallet.balance}</Text>
					</View>
					<View style={styles.rightContent}>
						<FontAwesome name='long-arrow-right' size={24} color='white' />
					</View>
				</View>
			</View>
			{/* wallet functionality */}
			<View style={styles.functionalityContainer}>
				<FlatList
					data={iconList}
					keyExtractor={(item, index) => index.toString()}
					horizontal={true}
					contentContainerStyle={{ columnGap: SIZES.xLarge }}
					renderItem={({ item }) => (
						<Button2
							icon={
								<FontAwesome
									name={item.iconName}
									size={18}
									color={COLORS.secondary}
								/>
							}
							title={item.title}
							screenName={item.screenName}
						/>
					)}
				/>
			</View>

			{/* transaction history */}
			<TransactionH transactions={wallet.transactions} />
		</View>
	);
}

export default Wallet;
