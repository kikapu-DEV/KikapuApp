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
import { AvailableNear, Header, TopRestraunts } from "../../../components";
import { useState } from "react";

function StudentHome() {
  const [search, setSearch] = useState('')
  return (
    <View style={styles.container}>
      <Header/>
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
      <ScrollView style={styles.homeDisplay} contentContainerStyle={{paddingBottom:30}} showsVerticalScrollIndicator={false}>
        {/* search button */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={search}
              placeholder="Search Restaurant"
              onChange={(e) => setSearch(e.target.value)}
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
