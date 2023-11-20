import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./bestSelling.style"
import { COLORS, SIZES, images } from "../../constants"
import { Entypo } from '@expo/vector-icons';
import RestItemCard from "../Cards/RestItemCard/RestItemCard";

function BestSelling() {
    const data = [
        {img: images.hoho, title: 'Bell pepper Red', qty: '1', price: '4500'},
        {img: images.lambMeat, title: 'Lamb Meat', qty: '1', price: '4500'}
    ]
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerTitle}>Best selling</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

    {/* list */}
    <View style={styles.listContainer}>
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index)=> index.toString()}
        contentContainerStyle={{columnGap: SIZES.xxLarge}}
        renderItem={({item})=>
        <RestItemCard img={item.img} title={item.title} qty={item.qty} price={item.price}/>
    
    }
        />
        
    </View>
    </View>
  )
}

export default BestSelling