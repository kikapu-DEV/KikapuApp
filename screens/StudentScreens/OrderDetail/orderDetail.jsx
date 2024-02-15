import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./orderDetail.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button3 } from "../../../components";
import { COLORS } from "../../../constants";
const OrderDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.txt1}>Mama burger</Text>
      </View>

      {/* body */}
      <View style={styles.content}>
        <Text style={styles.text1}>
          ordered: <Text style={styles.span}> 19 jun, 2022 1: 35 PM </Text>
        </Text>
        <Text style={styles.text2}>Order #SHGJD02</Text>
        <View style={styles.amount}>
          <Text style={styles.text3}>1 X Beef burger </Text>
          <Text style={styles.text4}>Ksh. 550 </Text>
        </View>
        <Text style={styles.text5}>sweet chili, soy chicken chips</Text>
      </View>

      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text1}>Subtotal</Text>
          <Text>Ksh. 550</Text>
        </View>

        <Text style={styles.text2}>Total</Text>
        <View style={styles.amount}>
          <Text style={styles.text3}>Mpesa</Text>
          <Text style={styles.text4}>Ksh. 550 </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View  style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text1}>Mama burger</Text>

          <TouchableOpacity style={styles.text4}>
            <MaterialIcons name="navigate-next" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Button3
      title="Order again"
      color={COLORS.secondary}
      screenName='restCart'
      />
      <Button3
      title="Go back"
      color={COLORS.grey}
      screenName='Home'
      />
    </View>
  );
};

export default OrderDetail;
