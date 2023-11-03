import { FlatList, Text, TouchableOpacity, View } from "react-native"
import styles from "./toprest.style"
import { SIZES } from "../../constants"
import RestCard from "../restCard/RestCard"

function TopRestraunts() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top restaurants</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      {/* restaurants list */}
      <View style={styles.cardsContainer}>
              <FlatList
              data = {[1,2,3,4,5,6]}
              renderItem={({item})=>(
                <RestCard
                  item={item}
                />
              )}
            //   keyContractor={item => item?.job_id}
              contentContainerStyle={{columnGap: SIZES.medium}}
              horizontal
              />

      </View>
    </View>
  )
}

export default TopRestraunts
