import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./StudentCheckout.style";
import { Button3, CartCard } from "../../../components";
import { COLORS, images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function StudentCheckout() {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart.items);
  const total = useSelector((state) => state.cart.cart.total);
  // const data = [
  //   { img: images.burger2, title: "Cheese Burgers", price: "1000" },
  //   { img: images.cup, title: "Blonde Roast", price: "500" },
  // ];
  console.log("total is ",total)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.txt1}>Cart</Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.mealId.toString()}
        // horizontal
        renderItem={({ item }) => (
          <CartCard
            img={item.img || images.burger2}
            title={item.name}
            price={item.price}
          />
        )}
      />

      {/* subtotal */}
      <View style={styles.mainSubContainer}>
        <View style={styles.subtotalContainer}>
          <Text style={styles.subTotal}>Subtotal</Text>
          <Text style={styles.amount}>Ksh. {total}</Text>
        </View>
        <View style={styles.subtotalContainer}>
          <Text style={styles.subTotal}>Delivery fee</Text>
          <Text style={styles.amount}>Free</Text>
        </View>
      </View>

      <View style={styles.subtotalContainer2}>
        <Text style={styles.Total}>Total</Text>
        <Text style={styles.total2}>Ksh. {total}</Text>
      </View>

      {/* button */}
      <Button3
        title="Checkout"
        color={COLORS.secondary}
        screenName="studentPayment"
      />
    </View>
  );
}

export default StudentCheckout;
