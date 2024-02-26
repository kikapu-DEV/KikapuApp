import {
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./RestCart.style";
import counter2Styles from "../../../components/counter/Counter2.style";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { COLORS, images } from "../../../constants";
import { Button3, Counter2 } from "../../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../components/Spinner/spinner";
import {
	addItemToCart,
	updateItemQuantity,
	removeItemFromCart,
} from "../../../store/reducers/cartSlice";
import { useEffect, useState } from "react";

function RestCart({ navigation }) {
	const [selectedItem, setSelectedItem] = useState(null);
	const { cart, loading } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const deliveryFee = 0;
	const promoCodeRedeemValue = 0;
	const totalAmount =
		cart.items.reduce((acc, item) => acc + item.total, 0) +
		deliveryFee -
		promoCodeRedeemValue;

	// useEffect(() => {
	// 	// console.log("cart", cart);
	// 	// console.log("selectedItem", selectedItem);
	// }, [cart, selectedItem]);

	const handleAdd = (e, item) => {
		const newQuantity = item.quantity + 1;
		const payload = {
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: newQuantity,
			total: item.price * newQuantity,
			image: item.image,
		};

		dispatch(addItemToCart(payload));
	};

	const handleSub = (e, item) => {
		const newQuantity = item.quantity - 1;

		if (newQuantity === 0) {
			dispatch(removeItemFromCart(item.id));
		} else {
			const payload = {
				id: item.id,
				name: item.name,
				price: item.price,
				quantity: newQuantity,
				total: item.price * newQuantity,
				image: item.image,
			};

			dispatch(updateItemQuantity(payload));
		}
	};

	const handleCheckout = (cart, total) => {
		if (cart.items.length === 0) return;

		navigation.navigate("studentPayment", {
			cart,
			total,
		});
	};

	if (loading) return <Spinner />;

	return (
		<View style={styles.container}>
			{/* header */}
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backBtn}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name='chevron-back' size={25} color='black' />
				</TouchableOpacity>
				<Text style={styles.txt1}>Cart</Text>
			</View>

			{/* BODY */}
			<FlatList
				data={cart.items}
				keyExtractor={(item, index) => index.toString()}
				ListEmptyComponent={() => (
					<View style={styles.emptyContainer}>
						<Text style={styles.emptyTxt}>No items in cart</Text>
					</View>
				)}
				renderItem={({ item }) => (
					<View style={styles.cartItem}>
						<Image source={images.c1} />
						<View>
							<Text style={styles.txt2}>{item.name}</Text>
							<Text style={styles.txt3}>{`qty: ${item.quantity}`}</Text>
							<Text style={styles.txt3}>{`Price: ${item.price}`}</Text>
						</View>
						<View>
							<View style={counter2Styles.container}>
								<TouchableOpacity onPress={(e) => handleSub(e, item)}>
									<Entypo
										name='minus'
										size={22}
										color='black'
										style={counter2Styles.icon}
									/>
								</TouchableOpacity>
								<Text>{item.quantity}</Text>
								<TouchableOpacity onPress={(e) => handleAdd(e, item)}>
									<Entypo
										name='plus'
										size={22}
										color={COLORS.whiteText}
										style={counter2Styles.icon2}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			/>

			<View style={styles.mainSubContainer}>
				{/* voucher box */}
				<View style={styles.promo}>
					<View style={styles.left}>
						<MaterialCommunityIcons
							name='ticket-percent-outline'
							size={24}
							color={COLORS.grey}
						/>
						<TextInput
							style={styles.textInput}
							placeholder='Enter promo code '
						/>
					</View>
					<TouchableOpacity style={styles.apply} onPress={() => {}}>
						<Text style={styles.applyTxt}>Apply</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.subtotalContainer}>
					<Text style={styles.subTotal}>Subtotal</Text>
					<Text style={styles.amount}>
						Ksh. {cart.items.reduce((acc, item) => acc + item.total, 0)}
					</Text>
				</View>
				<View style={styles.subtotalContainer}>
					<Text style={styles.subTotal}>Promo</Text>
					<Text style={styles.amount}>Ksh. {promoCodeRedeemValue}</Text>
				</View>
				<View style={styles.subtotalContainer}>
					<Text style={styles.subTotal}>Delivery fee</Text>
					<Text style={styles.amount}>
						{deliveryFee === 0 ? "Free" : `Ksh.${deliveryFee}`}
					</Text>
				</View>
			</View>

			<View style={styles.subtotalContainer2}>
				<Text style={styles.Total}>Total</Text>
				<Text style={styles.total2}>Ksh. {totalAmount}</Text>
			</View>

			{/* button */}
			<Button3
				title='Checkout'
				color={COLORS.secondary}
				screenName='studentPayment'
				pressHandler={() => {
					handleCheckout(cart, totalAmount);
				}}
			/>
		</View>
	);
}

export default RestCart;
