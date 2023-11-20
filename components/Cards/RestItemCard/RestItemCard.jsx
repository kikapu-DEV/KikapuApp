import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./RIC.style";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

function RestItemCard({img, title, qty, price}) {
  return (
    <View style={styles.itemContainer}>
      <View style={{ alignItems: "center" }}>
        <Image source={img} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.qty}>
        <Text style={styles.txt1}>
          {qty}kg, <Text>Ksh. {price}</Text>
        </Text>
        <TouchableOpacity onPress={()=>{}}>
          <Entypo name="circle-with-plus" size={30} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RestItemCard;
