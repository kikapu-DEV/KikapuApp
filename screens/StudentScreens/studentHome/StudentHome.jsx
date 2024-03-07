import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./studenthome.style";
import { COLORS, icons } from "../../../constants";
import {
  AvailableNear,
  Header,
  RestaurantListRow,
  TopRestraunts,
} from "../../../components";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import { getUser } from "../../../helpers/secureStore";
import useAuth from "../../../helpers/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../../../services/Students";

function StudentHome() {
  const navigation = useNavigation();
  const { userInfo } = useAuth();
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["getRestaurants"],
    queryFn: getRestaurants,
  });
  const checkUser = async () => {
    if (!userInfo) {
      navigation.navigate("login");
    }
  };

  useEffect(() => {
    checkUser();
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <Header user={userInfo} />
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>
          Find your favorite restaurant and menu near you
        </Text>
        <Ionicons
          name="ios-notifications-outline"
          size={24}
          color={COLORS.whiteText}
          style={styles.notificationIcon}
        />
      </View>
      {/* search button */}
      <View style={styles.mainSearchContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={search}
              placeholder="Search Restaurant"
              placeholderTextColor="white"
              onChange={(e) => setSearch(e.target.value)}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Ionicons name="ios-search-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.homeDisplay}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* TOP RESTAURANTS */}
        <TopRestraunts />
        <AvailableNear />
        <Text style={styles.headerTitle}>All Restaurants</Text>
        {data &&
          data.data.map((restaurant) => (
            <View key={restaurant.restaurantId} style={styles.allRestaurants}>
              <RestaurantListRow restaurant={restaurant} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

export default StudentHome;
