import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./search.style";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Ionicons name="ios-search-outline" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            placeholder="Search Restaurant"
            onChange={(e) => setSearch(e.target.value)}
          />
        </View>
      </View>
    </View>
  );
}

export default Search;
