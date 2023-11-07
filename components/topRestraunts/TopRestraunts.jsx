import { FlatList, Text, TouchableOpacity, View } from "react-native"
import styles from "./toprest.style"
import { SIZES, images } from "../../constants"
import RestCard from "../restCard/RestCard"

const popularImages = [images.food1,images.food2, images.food3];
function TopRestraunts() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top restaurants</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* restaurants list */}
      <View style={styles.cardsContainer}>
              <FlatList
              data = {[1,2,3]}
              renderItem={({item})=>(
                <RestCard item={item}/>
              )}
              contentContainerStyle={{columnGap: SIZES.xSmall}}
              horizontal
              />

      </View>
    </View>
  )
}

export default TopRestraunts
