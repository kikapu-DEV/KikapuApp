import { FlatList, Image, Text, View } from "react-native";
import styles from "./RestIngredient.style";
import { images } from "../../../constants";

function RestIngredient() {
    const data = [
        {img: images.d1, txt1: '100%', txt2: 'organic'},
        {img: images.d2, txt1: '100%', txt2: 'organic'},
        {img: images.d3, txt1: '100%', txt2: 'organic'},
        {img: images.d4, txt1: '100%', txt2: 'organic'},
      ]
  return (
    <View style={styles.detailContainer2}>
        <FlatList
        data={data}
        keyExtractor={(item, index)=> index.toString()}
        numColumns={2}
        contentContainerStyle={{columnGap: 30, paddingHorizontal: 20}}
        renderItem={({item})=>
      
          <View style={styles.dSubContainer}>
            <View><Image source={item.img}/></View>
            <View>
              <Text style={styles.txt2}>{item.txt1}</Text>
              <Text>{item.txt2}</Text>
            </View>
          </View>
      }
        />
      </View>
  )
}

export default RestIngredient;
