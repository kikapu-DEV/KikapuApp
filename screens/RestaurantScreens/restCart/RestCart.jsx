import {
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./RestCart.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../../../constants";
import { Button3, Counter2 } from "../../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../components/Spinner/spinner";
import { useEffect, useState } from "react";

function RestCart() {
	// const [stateOfCart, setStateOfCart] = useState({ cart: [], loading: true });
	const { cart, loading } = useSelector((state) => state.cart);
	// const data = [
	// 	{ img: images.c1, txt1: "Bell Pepper Red", txt2: "1kg, ksh4500" },
	// 	{ img: images.c2, txt1: "Butternut Squash ", txt2: "1kg, ksh4500" },
	// 	{ img: images.c3, txt1: "Arabic Ginger", txt2: "1kg, ksh4500" },
	// 	{ img: images.c4, txt1: "Organic Carrots", txt2: "1kg, ksh4500" },
	// ];

	// if (loading) return <Spinner />;

	return (
		<View style={styles.container}>
			{/* header */}
			<View style={styles.header}>
				<TouchableOpacity style={styles.backBtn}>
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
						<Counter2 />
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
					<Text style={styles.amount}>Ksh. 18,000</Text>
				</View>
				<View style={styles.subtotalContainer}>
					<Text style={styles.subTotal}>Delivery fee</Text>
					<Text style={styles.amount}>Free</Text>
				</View>
			</View>

			<View style={styles.subtotalContainer2}>
				<Text style={styles.Total}>Total</Text>
				<Text style={styles.total2}>Ksh. 18,000</Text>
			</View>

			{/* button */}
			<Button3
				title='Checkout'
				color={COLORS.secondary}
				screenName='studentPayment'
			/>
		</View>
	);
}

export default RestCart;
