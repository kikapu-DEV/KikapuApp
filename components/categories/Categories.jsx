import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./categories.style";
import { SIZES, images } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "../../services/Restaurants";
import Spinner from "../Spinner/spinner";

function Categories() {
  const navigation = useNavigation();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["productCategories"],
    queryFn: getProductCategories,
  });

  // console.log("categories", query.data);
  // const data = [
  // 	{ image: images.apple, title: "Fruits" },
  // 	{
  // 		image: images.vegetable,
  // 		title: "Vegetables",
  // 		screenName: "categoryItems",
  // 	},
  // 	{ image: images.cheese, title: "Dairy" },
  // 	{ image: images.meat, title: "Meat" },
  // ];
  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  // console.log("categories", data.data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* list */}
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          data={data.data}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => <Text>No Categories yet</Text>}
          renderItem={({ item }) => (
            <View style={styles.itemMainContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("categoryItems", { categoryId: item._id })
                }
              >
                <View style={styles.itemContainer}>
                  <Image source={item.image ? item.image : images.apple} />
                </View>
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={{
            columnGap: SIZES.xxLarge,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
}

export default Categories;
