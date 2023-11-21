import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./bestSelling.style";
import { SIZES, images } from "../../constants";
import RestItemCard from "../Cards/RestItemCard/RestItemCard";

function BestSelling({ title }) {
  const data = [
    { img: images.hoho, title: "Bell pepper Red", qty: "1", price: "4500", screenName: 'restItemDetail' },
    { img: images.lambMeat, title: "Lamb Meat", qty: "1", price: "4500", screenName: 'restItemDetail' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* list */}
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ columnGap: SIZES.xxLarge }}
          renderItem={({ item }) => (
            <RestItemCard
              img={item.img}
              title={item.title}
              qty={item.qty}
              price={item.price}
              screenName={item.screenName}
            />
          )}
        />
      </View>
    </View>
  );
}

export default BestSelling;
