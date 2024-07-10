import React from "react";
import styles from "./AddRestProduct.style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SIZES, images } from "../../../constants";

const AddRestProduct = () => {
  const navigate = useNavigation();
  const staticData = [
    {
      img: images.fork,
      name: "Breakfast",
    },
    {
      img: images.fork,
      name: "Main Course",
    },
    {
      img: images.fork,
      name: "Drinks",
    },
    {
      img: images.fork,
      name: "Dessert",
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txt1}>Add Product</Text>
        </View>

        <View>
          <Text style={styles.txt2}>Choose a category for your meal</Text>

          <View style={styles.listContainer}>
            <FlatList
              data={staticData}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              contentContainerStyle={{
                columnGap: SIZES.xxLarge,
                paddingBottom: 30,
              }}
              renderItem={({ item }) => (
                <View style={styles.itemsContainer}>
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigate.navigate("addMeal")}
                  >
                    <Image source={item.img} />
                    <Text style={styles.txt3}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default AddRestProduct;
