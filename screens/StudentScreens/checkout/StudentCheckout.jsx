import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./StudentCheckout.style";
import { Button1, CartCard } from "../../../components";
import { COLORS, images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

function StudentCheckout() {
  const navigation = useNavigation();
  const data = [
    { img: images.burger2, title: "Cheese Burgers", price: "1000" },
    { img: images.cup, title: "Blonde Roast", price: "500" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("studentProduct")}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.txt1}>Cart</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        // horizontal
        renderItem={({ item }) => (
          <CartCard img={item.img} title={item.title} price={item.price} />
        )}
      />

      {/* subtotal */}
      <View style={styles.mainSubContainer}>
        <View style={styles.subtotalContainer}>
        <Text style={styles.subTotal}>Subtotal</Text>
        <Text style={styles.amount}>Ksh. 1500</Text>
      </View>
      <View style={styles.subtotalContainer}>
        <Text style={styles.subTotal}>Delivery fee</Text>
        <Text style={styles.amount}>Free</Text>
      </View>
      </View>

      <View style={styles.subtotalContainer2}>
        <Text style={styles.Total}>Total</Text>
        <Text style={styles.total2}>Ksh. 1500</Text>
      </View>
      
      {/* button */}
      <Button1 title='Checkout' color={COLORS.secondary} screenName="studentPayment"/>
    </View>
  );
}

export default StudentCheckout;
