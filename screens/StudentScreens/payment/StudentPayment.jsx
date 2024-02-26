import { Alert, Image, Text, TextInput, View } from "react-native";
import styles from "./studentPayment.style";
import { COLORS, images } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwipeButton from "rn-swipe-button";
import { SwipeBtn } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { makeOrder } from "../../../services/Orders/index";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../../../components";
import { clearCart } from "../../../store/reducers/cartSlice";

function StudentPayment({ route }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { wallet, loading } = useSelector((state) => state.wallet);
	const { cart, total } = route.params;
	const eligibleForLoan = true;

	const mutation = useMutation({
		mutationFn: (menu) => makeOrder(menu),
		onSuccess: (data) => {
			console.log("success", data);
			// Dispatch the action to clear the cart
			dispatch(clearCart());
			// Navigate to the success screen
			const orderId = data.order.orderId;
			navigation.navigate("success", {
				orderId,
			});
		},
	});

	const submitOrder = (payload) => {
		mutation.mutate(payload);
	};
	const handlePayment = (e, totalPrice) => {
		const loanAmount =
			wallet.balance < totalPrice ? totalPrice - wallet.balance : 0;
		if (loanAmount > 0) {
			if (!eligibleForLoan) {
				Alert.alert(
					"Insufficient funds",
					"Your wallet balance is insufficient for this transaction. Please top up your wallet or apply for a loan",
					[
						{
							text: "Top up",
							onPress: () => navigation.navigate("topUp"),
						},
						// {
						//   text: "Apply for loan",
						//   onPress: () => navigation.navigate("loan"),
						// },
					]
				);
			} else {
				Alert.alert(
					"Your kikapu account has insufficient balance.",
					`Would you like kikapu to loan you ksh. ${loanAmount}?`,
					[
						{
							text: "NO",
							onPress: () => {},
						},
						{
							text: "YES",
							onPress: () => {
								submitOrder({
									loan: {
										isLoan: true,
										loanAmount,
									},
									orders: cart.items.map((item) => ({
										productId: item.id,
										quantity: item.quantity,
										price: item.price,
									})),
									totalPrice,
								});
							},
						},
					]
				);
			}
		} else {
			submitOrder({
				loan: {
					isLoan: false,
					loanAmount,
				},
				orders: cart.items.map((item) => ({
					productId: item.id,
					quantity: item.quantity,
					price: item.price,
				})),
				totalPrice,
			});
		}
	};

	console.log("cart", cart.items, "total", total);
	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Image source={images.kikapuLogo} />
			</View>
			<Text style={styles.text1}>Make payment</Text>
			{cart.items.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Text key={index} style={styles.text2}>
					{index + 1}. {item.name}
				</Text>
			))}
			<View style={styles.smallAvatar}>
				<Image source={images.smallAvatar} />
			</View>
			<Text style={styles.text4}>Paula Njoroge</Text>
			{/* <View style={styles.inputContainer}>
				<TextInput style={styles.inputBox} />
			</View>

			<View style={styles.promoTexts}>
				<View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
					<MaterialCommunityIcons
						name='bookmark-minus'
						size={24}
						color={COLORS.grey}
					/>
					<Text style={styles.text5}>Promo code</Text>
				</View>

				<Text style={styles.text6}>APPLY</Text>
			</View> */}

			<View style={styles.totalBox}>
				<Text>Total</Text>
				<Text style={{ fontSize: 16, fontWeight: "400" }}>Ksh. {total}</Text>
			</View>

			{/* swipe button */}
			<View style={styles.swipeBtn}>
				<SwipeButton
					thumbIconComponent={SwipeBtn}
					railBackgroundColor={COLORS.secondary}
					title='Swipe to pay'
					thumbIconBackgroundColor='#FFFFFF'
					railStyles={{
						backgroundColor: COLORS.lightGreen,
						borderColor: COLORS.lightGreen,
					}}
					titleStyles={{
						color: COLORS.whiteText,
						fontSize: 18,
					}}
					thumbIconBorderColor={COLORS.whiteText}
					railBorderColor={COLORS.secondary}
					// onSwipeStart={(e) => console.log("started")}
					onSwipeSuccess={(e) => handlePayment(e, total)}
					// onSwipeFail={(e) => console.log("failed")}
				/>
			</View>
		</View>
	);
}

export default StudentPayment;
