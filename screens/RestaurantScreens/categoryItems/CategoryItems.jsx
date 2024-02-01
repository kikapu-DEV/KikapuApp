import { FlatList, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import styles from "./categoryItem.style";
import { CLHeader, RestItemCard } from "../../../components";
import { SIZES, images } from "../../../constants";
import { getProductByCategory } from "../../../services/Restaurants";
import Spinner from "../../../components/Spinner/spinner";

function CategoryItems({ route, navigation }) {
	const { categoryId } = route.params;
	// console.log("category id", categoryId);
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["categoryProducts", categoryId],
		queryFn: getProductByCategory,
	});
	const staticData = [
		{
			img: images.hoho,
			name: "Bell pepper Red",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.arabGinger,
			name: "Arab Ginger",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.lettuce,
			name: "Fresh lettuce",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.butterNut,
			name: "Butternut Squash ",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.carrots,
			name: "Organic Carrots",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.broccoli,
			name: "Fresh Broccoli",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.tomatoes,
			name: "Fresh Tomatoes",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
		{
			img: images.Spinach,
			name: "Fresh Spinach",
			quantity: "1",
			price: "4500",
			_id: "657b3d075c026d3bf55234bb",
		},
	];
	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;
	return (
		<View style={styles.container}>
			<CLHeader name={data.data.category.name} />
			<View style={styles.listContainer}>
				<FlatList
					data={data.data.products}
					keyExtractor={(item, index) => index.toString()}
					ListEmptyComponent={() => (
						<View style={styles.itemsContainer}>
							<Text>No products in this category yet</Text>
						</View>
					)}
					numColumns={2}
					contentContainerStyle={{
						columnGap: SIZES.xxLarge,
						paddingBottom: 30,
					}}
					renderItem={({ item }) => (
						<View style={styles.itemsContainer}>
							<RestItemCard
								img={item.img ? item.img : images.hoho}
								title={item.name}
								qty={item.quantity}
								price={item.price}
								id={item._id}
							/>
						</View>
					)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}

export default CategoryItems;
