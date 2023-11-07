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
import { COLORS, icons } from "../../constants";
import { AvailableNear, TopRestraunts } from "../../components";

function StudentHome() {
  return (
    <View style={styles.container}>
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
      <ScrollView style={styles.homeDisplay}>
        {/* search button */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="Search Restaurant"
              onChange={() => {}}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* TOP RESTAURANTS */}
        <TopRestraunts/>
        <AvailableNear/>
      </ScrollView>
      
    </View>
  );
}

export default StudentHome;
