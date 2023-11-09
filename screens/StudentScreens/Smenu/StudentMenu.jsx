import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./sMenu.style";
import { COLORS, images } from "../../../constants";
import { Ionicons } from "@expo/vector-icons"
import { MenuCard } from "../../../components";


function StudentMenu() {
  return (
    <View style={styles.container}>
      <ScrollView
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
            <Text style={styles.title}>Mama Burger</Text>

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
          data={[1,2,3,4,5,6]}
          renderItem={()=>(
            <MenuCard/>
          )}
          />
          
      </ScrollView>
    </View>
  );
}

export default StudentMenu;
