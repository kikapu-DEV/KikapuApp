import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./availableCard.style";
import { COLORS, images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

function AvailableCard({ handleCardPress, item }) {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => handleCardPress()}
					style={styles.logoContainer}
				>
					<Image
						source={images.available2}
						resizeMode='contain'
						style={styles.availableImage}
					/>
				</TouchableOpacity>
			</View>

			{/* available content */}
			<View style={styles.availableContent}>
				<Text style={styles.availableTitle}>{item.restaurantName}</Text>
				<View style={styles.availableDetail}>
					<View style={styles.availableContentSmall}>
						<Ionicons name='star-sharp' size={20} color={COLORS.yellow} />
						<Text style={styles.ratingText}>
							3.8
							<Text style={{ fontWeight: 300, paddingLeft: 10 }}>
								{" "}
								[120 + Review]
							</Text>
						</Text>
					</View>
					<View>
						<Text>
							Ksh. 300<Text style={{ color: COLORS.grey }}>/day</Text>
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

export default AvailableCard;
