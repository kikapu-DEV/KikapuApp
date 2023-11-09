import { Text, TouchableOpacity, View } from "react-native";
import styles from "./menucard.style";

function MenuCard() {
  return (
    <TouchableOpacity>
      <View style={styles.menuCardContainer}>
        <Text style={styles.menuTitle}>Cheese burger</Text>
        <Text style={styles.menuSubTitle}>Buy one get 1 free</Text>
        <Text style={styles.foodContent}>Beef, egg, tomatoes onions</Text>
        <TouchableOpacity>
          <View style={styles.menuBtn}>
            <Text style={styles.menuBtnText}>ksh. 1000</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default MenuCard;
