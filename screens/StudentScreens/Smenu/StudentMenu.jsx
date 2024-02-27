import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./sMenu.style";
import { COLORS, images } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { MenuCard, Spinner } from "../../../components";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../../../services/Students";

function StudentMenu({ route }) {
  const { restaurantId, restaurantName } = route.params;
  const { data, isLoading, error } = useQuery({
    queryKey: ["getMenus", restaurantId],
    queryFn: getMenus,
  });
  console.log("the rest name is:" ,restaurantName);

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;
  if (!data) return null;

  return (
    <View style={styles.container}>
      <View
        style={styles.menuListContainer}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.menuMainImg}>
          <Image source={images.available1} resizeMode="contain" />
        </View>

        {/* title container */}
        <View style={styles.titleMainContainer}>
          {/* business title and ratings */}
          <View style={styles.TitleContainer}>
            <Text style={styles.title}>{restaurantName}</Text>

            <View style={styles.menuContentSmall}>
              <Ionicons name="star-sharp" size={15} color={COLORS.yellow} />
              <Text style={styles.ratingText}>
                3.8
                <Text style={{ fontWeight: 300, paddingLeft: 10 }}>
                  {" "}
                  [120 + Review]
                </Text>
              </Text>
            </View>
          </View>

          {/* heart icon */}
          <View>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* menu list */}
        <FlatList
          data={data.data}
          ListEmptyComponent={() => <Text>No meals yet</Text>}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <MenuCard item={item} />}
        />
      </View>
    </View>
  );
}

export default StudentMenu;
