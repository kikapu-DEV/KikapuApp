import { Text, TouchableOpacity, View } from "react-native";
import styles from "./menucard.style";
import { useNavigation } from "@react-navigation/native";

function MenuCard({ item }) {
  const navigation = useNavigation();

  const navigateToStudentProduct = (meal) => {
    navigation.navigate("studentProduct", { meal });
  };

  return (
    <>
      {item.meals.map((meal) => (
        <TouchableOpacity
          key={meal.mealId}
          onPress={() => navigateToStudentProduct(meal)}
        >
          <View style={styles.menuCardContainer} key={meal.mealId}>
            <Text style={styles.menuTitle}>{meal.name}</Text>
            <Text style={styles.menuSubTitle}>Buy one get 1 free</Text>
            <Text style={styles.foodContent}>{meal.description}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("studentProduct", { menuId: data.data._id })
              }
            >
              <View style={styles.menuBtn}>
                <Text style={styles.menuBtnText}>ksh. {meal.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export default MenuCard;
