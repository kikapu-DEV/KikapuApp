import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
	Button1,
	Button3,
	Counter2,
	RIDHeader,
	RestIngredient,
} from "../../../components";
import styles from "./RID.style";
import { COLORS } from "../../../constants";
import Counter2Style from "../../../components/counter/Counter2.style";
import { getProduct } from "../../../services/Restaurants";
import Spinner from "../../../components/Spinner/spinner";

function RID({ route, navigation }) {
	const [count, setCount] = useState(1);
	const { itemId } = route.params;
	// console.log("item id", itemId);

	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["product", itemId],
		queryFn: getProduct,
	});

	if (isLoading) return <Spinner />;
	// console.log("item data", data.data);
	const product = data.data.product;
	const category = data.data.category;

	const handleAdd = () => {
		setCount((prevState) => prevState + 1);
	};

	const handleSub = () => {
		setCount((prevState) => (prevState > 1 ? prevState - 1 : prevState));
	};

	return (
		<View style={styles.container}>
			<RIDHeader />
			<View style={styles.detailContainer}>
				<Text style={styles.txt3}>{category.name}</Text>
				<View style={styles.detailSubContainer}>
					<Text style={styles.txt1}>{product.name}</Text>
					<View>
						<View style={Counter2Style.container}>
							<TouchableOpacity onPress={handleSub}>
								<Entypo
									name='minus'
									size={22}
									color={Counter2Style.icon}
									style={Counter2Style.icon}
								/>
							</TouchableOpacity>
							<Text>{count}</Text>
							<TouchableOpacity onPress={handleAdd}>
								<Entypo
									name='plus'
									size={22}
									color={COLORS.whiteText}
									style={Counter2Style.icon2}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<Text style={styles.txt2}>
					{`ksh. ${product.price} / ${product.unit ? product.unit : "kg"}`}
				</Text>
				<Text style={styles.txt3}>{`${product.description}`}</Text>
			</View>

			<RestIngredient />
			{/* add to cart button */}
			<View style={{ marginBottom: 200 }}>
				<Button3
					title='Add to cart'
					color={COLORS.secondary}
					screenName='restCart'
					iconName='ios-cart-outline'
					product={{
						id: product._id,
						name: product.name,
						price: product.price,
						quantity: count,
						total: product.price * count,
						image: product.image,
					}}
				/>
			</View>
		</View>
	);
}

export default RID;
