import { useEffect } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./AddProduct.style.";
import { useNavigation } from "@react-navigation/native";
import { Button3, Counter } from "../../../components";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "../../../constants";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../../services/Farmers/index";
import { Spinner } from "../../../components";

const data = [
	{ label: "Fruits", value: "Fruits" },
	{ label: "Vegetables", value: "Vegetables" },
	{ label: "Dairy", value: "Dairy" },
	{ label: "Meat", value: "Meat" },
];

function AddProduct() {
	const navigation = useNavigation();
	const [productCategory, setProductCategory] = useState(null);
	const [quantityCount, setQuantityCount] = useState(1);
	const [product, setProduct] = useState({
		title: "",
		description: "",
		price: "",
		quantity: "",
		productCategoryId: "",
	});

	const mutation = useMutation({
		mutationFn: (product) => createProduct(product),
	});

	const handleCountChange = (newCount) => {
		setQuantityCount(newCount);
		setProduct({ ...product, quantity: newCount });
	};

	const handleInputChanges = (value, name) => {
		setProduct({ ...product, [name]: value });
	};

	const handleUploadImage = () => {
		console.log("Upload Image");
	};

	const handleTakeImage = () => {
		console.log("Take Image");
	};

	useEffect(() => {
		console.log("productCategory updated:", productCategory);
	}, [productCategory]);

	const handleSubmit = () => {
		setProduct((prevProduct) => ({
			...prevProduct,
			productCategoryId: productCategory,
			quantity: quantityCount + 1,
		}));

		console.log("product", product);

		// mutation.mutate(product);

		// Now you can log the updated state

		// mutation?.isSuccess ? navigation.navigate("addSuccess") : null;
	};
	return (
		<View style={styles.container}>
			{/* header */}
			<Text style={styles.txt1}>Add new product</Text>

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
					placeholder='Product category'
					data={data}
					value={productCategory}
					labelField='label'
					valueField='value'
					onChange={(item) => setProductCategory(item.value)}
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
					!mutation ? (
						"Add Product"
					) : mutation.isLoading ? (
						<Spinner />
					) : (
						"Add Product"
					)
				}
				color={COLORS.secondary}
				screenName='addSuccess'
				pressHandler={() => handleSubmit()}
			/>
		</View>
	);
}

export default AddProduct;
