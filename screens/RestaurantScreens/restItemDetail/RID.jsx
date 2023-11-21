import { ScrollView, Text, View } from "react-native";
import {
  Button1,
  Counter2,
  RIDHeader,
  RestIngredient,
} from "../../../components";
import styles from "./RID.style";
import { COLORS } from "../../../constants";

function RID() {
  return (
    <View style={styles.container}>
      <RIDHeader />

      <View style={styles.detailContainer}>
        <View style={styles.detailSubContainer}>
          <Text style={styles.txt1}>Arabic Ginger</Text>
          <Counter2 />
        </View>
        <Text style={styles.txt2}>1kg, ksh. 4500</Text>
        <Text style={styles.txt3}>
          Ginger is a flowering plant whose rhizome, ginger root or ginger, is
          widely used as a spice and a folk medicine.
        </Text>
      </View>

      <RestIngredient />
      {/* add to cart button */}
      <View style={{ marginBottom: 200 }}>
        <Button1
          title="Add to cart"
          color={COLORS.secondary}
          screenName="checkout"
          iconName="ios-cart-outline"
        />
      </View>
    </View>
  );
}

export default RID;
