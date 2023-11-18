import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./bestSelling.style"
import { COLORS, SIZES, images } from "../../constants"
import { Entypo } from '@expo/vector-icons';

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
        <View style={styles.itemContainer}>
            <View style={{alignItems: 'center'}}>
                 <Image source={item.img}/>
            </View>
           
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.qty}>
                <Text style={styles.txt1}>{item.qty}kg, <Text>Ksh. {item.price}</Text></Text>
                <TouchableOpacity>
                <Entypo name="circle-with-plus" size={30} color={COLORS.secondary} />
                </TouchableOpacity>
            </View>
        </View>
    
    }
        />
        
    </View>
    </View>
  )
}

export default BestSelling
