import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./RestAddMenu.style";
import { useNavigation } from "@react-navigation/native";
import { Button3, Counter } from "../../../components";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "../../../constants";
import { useMutation } from "@tanstack/react-query";
import { createMenu } from "../../../services/Restaurants/index";
import { Spinner } from "../../../components";

const data = [
	{ label: "Breakfast", value: "Breakfast" },
	{ label: "Vegetables", value: "Vegetables" },
	{ label: "Dairy", value: "Dairy" },
	{ label: "Meat", value: "Meat" },
];
function RestAddMeal({ route }) {
	const navigation = useNavigation();
	const { mealCategoryId, otherMealCategories } = route.params;
	const [menuCategory, setMenuCategory] = useState(null);
	const [quantityCount, setQuantityCount] = useState(1);
	const [meal, setMeal] = useState({
		title: "",
		description: "",
		price: "",
		quantity: "",
		menuCategoryId: "",
	});

	const mutation = useMutation({
		mutationFn: (menu) => createMenu(menu),
	});

	const handleCountChange = (newCount) => {
		setQuantityCount(newCount);
		setMeal({ ...meal, quantity: newCount });
	};

	const handleInputChanges = (value, name) => {
		setMeal({ ...meal, [name]: value });
	};

	const handleUploadImage = () => {
		console.log("Upload Image");
	};
	const handleTakeImage = () => {
		console.log("Take Image");
	};

	const handleSubmit = () => {
		setMeal((prevMeal) => ({
			...prevMeal,
			menuCategoryId: menuCategory,
			quantity: quantityCount + 1,
		}));

		// Now you can log the updated state
		const updatedMeal = {
			name: otherMealCategories.find((item) => item._id === meal.menuCategoryId)
				?.name,
			description: otherMealCategories.find(
				(item) => item._id === meal.menuCategoryId
			)?.description,
			menuCategoryId: meal.menuCategoryId,
			meal: {
				price: meal.price,
				quantity: meal.quantity,
				title: meal.title,
				description: meal.description,
			},
		};

		// console.log("Meal Data:", updatedMeal);

		mutation.mutate(updatedMeal);

		mutation?.isSuccess ? navigation.navigate("addSuccess") : null;
	};

	return (
		<View style={styles.container}>
			{/* header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name='arrow-back-circle-outline' size={32} color='black' />
				</TouchableOpacity>
				<Text style={styles.txt1}>Add new Meal</Text>
			</View>

			{mutation.isError ? (
				<View
					style={{
						backgroundColor: COLORS.red,
						padding: 10,
						borderRadius: 5,
					}}
				>
					<Text style={{ color: COLORS.whiteText }}>
						{mutation.error.message}
					</Text>
				</View>
			) : null}

			{/* body */}
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* <Text style={styles.txt1}>{mealCategoryId}</Text> */}
				<Text style={styles.txt2}>Title</Text>
				<TextInput
					style={styles.textInput}
					onChange={(e) => handleInputChanges(e.nativeEvent.text, "title")}
				/>

				<Text style={styles.txt2}>Description</Text>
				<TextInput
					style={styles.textInput2}
					onChange={(e) =>
						handleInputChanges(e.nativeEvent.text, "description")
					}
				/>

				<View style={styles.row}>
					<View style={styles.left}>
						<Text style={styles.txt2}>Price</Text>
						<TextInput
							style={styles.textInput3}
							onChange={(e) => handleInputChanges(e.nativeEvent.text, "price")}
						/>
					</View>

					<View style={styles.left}>
						<Text style={styles.txt2}>Quantity</Text>
						<Counter count={quantityCount} onCountChange={handleCountChange} />
					</View>
				</View>

				{/* dropdown */}
				<Dropdown
					style={styles.dropdown}
					placeholder='Add to Menu'
					data={otherMealCategories}
					value={menuCategory}
					labelField='name'
					valueField='_id'
					onChange={(item) => setMenuCategory(item._id)}
				/>

				{/* upload image */}
				<View style={styles.row2}>
					<TouchableOpacity onPress={handleUploadImage}>
						<View style={styles.left2}>
							<Ionicons name='image-outline' size={50} color={COLORS.grey} />
							<Text>Upload image</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={handleTakeImage}>
						<View style={styles.left2}>
							<MaterialCommunityIcons
								name='camera-outline'
								size={50}
								color={COLORS.grey}
							/>
							<Text>Take image</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>

			{/* button */}
			<Button3
				title={
					!mutation ? "Add Meal" : mutation.isLoading ? <Spinner /> : "Add Meal"
				}
				color={COLORS.secondary}
				screenName='addSuccess'
				pressHandler={() => {
					handleSubmit();
				}}
			/>
		</View>
	);
}

export default RestAddMeal;
