import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./mealcard.style";
import { images } from "../../constants";
import { useNavigation } from "@react-navigation/native";


function MealCard({ item }) {
  const navigation = useNavigation();

    const handleCardPress = (meal) => {
    navigation.navigate("studentProduct", { meal });
  };
  return (
    <>
      {item.meals.map((meal) => (
        <View style={styles.mainContainer} key={meal.mealId}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => handleCardPress(meal)}
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
              <View style={styles.availableContentSmall}>
                <Text style={styles.ratingText}>{meal.name}</Text>
              </View>
              <View>
                <Text>
                  Ksh. {meal.price}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
}

export default MealCard;
