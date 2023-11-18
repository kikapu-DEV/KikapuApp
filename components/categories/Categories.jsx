import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./categories.style"
import { SIZES, images } from "../../constants"

function Categories() {
  const data = [
    {image: images.apple, title: 'Fruits'},
    {image: images.vegetable, title: 'Vegetables'},
    {image: images.cheese, title: 'Diary'},
    {image: images.meat, title: 'Meat'},
  ]
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
        data={data}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item})=> 
          <TouchableOpacity>
              <View style={styles.itemContainer}>
                  <Image source={item.image}/>
                  <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
        }
        contentContainerStyle={{columnGap: SIZES.xxLarge, justifyContent: "center", alignItems: "center"}}
        />   
      </View>
    </View>
  )
}

export default Categories
