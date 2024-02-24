import React from "react";
import styles from "./AddRestProduct.style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES, images } from "../../../constants";
import { useQuery } from "@tanstack/react-query";
import { getMenuCategories } from "../../../services/Restaurants/index";

const AddRestProduct = () => {
	const navigate = useNavigation();

	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["menuCategories"],
		queryFn: getMenuCategories,
	});

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;

	const menuCategoriesData = data.data;
	// console.log("menu categories: ", menuCategoriesData);

	// const staticData = [
	// 	{
	// 		img: images.fork,
	// 		name: "Breakfast",
	// 	},
	// 	{
	// 		img: images.fork,
	// 		name: "Main Course",
	// 	},
	// 	{
	// 		img: images.fork,
	// 		name: "Drinks",
	// 	},
	// 	{
	// 		img: images.fork,
	// 		name: "Dessert",
	// 	},
	// ];
	return (
		<>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.txt1}>Add Product</Text>
				</View>

				<View>
					<View style={styles.listContainer}>
						<Text style={styles.txt2}>Choose a category for your meal</Text>
						<FlatList
							data={menuCategoriesData}
							keyExtractor={(item, index) => index.toString()}
							numColumns={2}
							contentContainerStyle={{
								columnGap: SIZES.xxLarge,
								paddingBottom: 30,
							}}
							renderItem={({ item }) => (
								<View style={styles.itemsContainer}>
									<TouchableOpacity
										style={styles.itemContainer}
										onPress={() =>
											navigate.navigate("addMeal", {
												mealCategoryId: item._id,
												otherMealCategories: menuCategoriesData.map(
													(category) => ({
														_id: category._id,
														name: category.name,
														description: category.description,
													})
												),
											})
										}
									>
										<Image source={images.fork} />
										<Text style={styles.txt3}>{item.name}</Text>
									</TouchableOpacity>
								</View>
							)}
							showsVerticalScrollIndicator={false}
						/>
					</View>
				</View>
			</View>
		</>
	);
};

export default AddRestProduct;
