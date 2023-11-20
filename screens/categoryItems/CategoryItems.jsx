import { FlatList, Text, View } from "react-native";
import styles from "./categoryItem.style";
import { CLHeader, RestItemCard } from "../../components";
import { SIZES, images } from "../../constants";

function CategoryItems() {
  const data = [
    { img: images.hoho, title: "Bell pepper Red", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500" },
  ];
  return (
    <View style={styles.container}>
      <CLHeader />
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{ columnGap: SIZES.xxLarge }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemsContainer}>
                <RestItemCard
              img={item.img}
              title={item.title}
              qty={item.qty}
              price={item.price}
            />
            </View>
            
          )}
        />
      </View>
    </View>
  );
}

export default CategoryItems;
