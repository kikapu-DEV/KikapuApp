import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../availableCard/availableCard.style";
import { COLORS, images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

function MealCard({ handleCardPress, item }) {
    return (
    <>
        {
            item.meals.map((meal) => (
                <View style={styles.mainContainer} key={meal.mealId}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleCardPress()}
          style={styles.logoContainer}
        >
          <Image
            source={images.available2}
            resizeMode="contain"
            style={styles.availableImage}
          />
        </TouchableOpacity>
      </View>

      {/* available content */}
      <View style={styles.availableContent}>
        <Text style={styles.availableTitle}>{item.restaurantName}</Text>
        <View style={styles.availableDetail}>
          <View srtyle={styles.availableContentSmall}>
            <Ionicons name="star-sharp" size={20} color={COLORS.yellow} />
            <Text style={styles.ratingText}>{meal.name}</Text>
          </View>
          <View>
            <Text>
              Ksh. 3000<Text style={{ color: COLORS.grey }}>/day</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
            ))
      }
    </>
  );
}

export default MealCard;
