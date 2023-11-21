import { FlatList, Text, View } from "react-native";
import styles from "./categoryItem.style";
import { CLHeader, RestItemCard } from "../../../components";
import { SIZES, images } from "../../../constants";

function CategoryItems() {
  const data = [
    { img: images.hoho, title: "Bell pepper Red", qty: "1", price: "4500",screenName: "restItemDetail" },
    {
      img: images.arabGinger,
      title: "Arab Ginger",
      qty: "1",
      price: "4500",
      screenName: "restItemDetail",
    },
    { img: images.lettuce, title: "Fresh lettuce", qty: "1", price: "4500",screenName: "restItemDetail" },
    {
      img: images.butterNut,
      title: "Butternut Squash ",
      qty: "1",
      price: "4500",screenName: "restItemDetail"
    },
    { img: images.carrots, title: "Organic Carrots", qty: "1", price: "4500",screenName: "restItemDetail" },
    { img: images.broccoli, title: "Fresh Broccoli", qty: "1", price: "4500",screenName: "restItemDetail" },
    { img: images.tomatoes, title: "Fresh Tomatoes", qty: "1", price: "4500",screenName: "restItemDetail" },
    { img: images.Spinach, title: "Fresh Spinach", qty: "1", price: "4500",screenName: "restItemDetail" },
  ];
  return (
    <View style={styles.container}>
      <CLHeader />
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{
            columnGap: SIZES.xxLarge,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemsContainer}>
              <RestItemCard
                img={item.img}
                title={item.title}
                qty={item.qty}
                price={item.price}
                screenName={item.screenName}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default CategoryItems;
