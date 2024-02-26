import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./sProduct.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, images } from "../../../constants";
import { Button3, Counter, Spinner } from "../../../components";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../../../services/Students";

function StudentProduct({ route }) {
  const { meal } = route.params;
  const navigation = useNavigation();
  const [value, setValue] = useState(null);

  const data = [
    { icon: "md-time-outline", txt1: "15 mins", txt2: "Ready In" },
    { icon: "chatbox-ellipses", txt1: "32+", txt2: "Review" },
    { icon: "star", txt1: "4.2", txt2: "Ratings" },
  ];

  const data2 = [
    { label: "item1", value: 1 },
    { label: "item2", value: 2 },
    { label: "item3", value: 3 },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.txt1}>Details</Text>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* PRODUCT IMAGE */}
      <View style={styles.foodContainer}>
        <Image source={images.burger} resizeMode="contain" />
      </View>
      <View style={styles.DetailsContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <View style={styles.detailsSubContainer}>
              <View style={styles.innerContainer}>
                <Ionicons name={item.icon} size={20} color={COLORS.grey2} />
                <Text style={styles.txt2}> {item.txt1}</Text>
              </View>
              <Text style={styles.txt3}>{item.txt2}</Text>
            </View>
          )}
        />
      </View>

      {/* MORE DETAILS */}
      <View style={styles.moreContainer}>
        <View style={styles.moreSubContainer}>
          <View>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.price}>{meal.price}</Text>
          </View>
          {/* counter btn */}
          <Counter />
        </View>
      </View>

      {/* extra ingredient */}
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholder="Add extra Ingredient"
          data={data2}
          value={value}
          labelField="label"
          valueField="value"
          onChange={(item) => setValue(item.value)}
        />
      </View>

      {/* description */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.desc}>Description</Text>
        <Text>{meal.description}</Text>
      </ScrollView>

      {/* add cart button */}
      <Button3
        title="Add to cart"
        color={COLORS.secondary}
        screenName="checkout"
        iconName="ios-cart-outline"
      />
    </View>
  );
}

export default StudentProduct;
