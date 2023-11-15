import { Image, Text, View } from "react-native"
import styles from "./CartCard.style"
import { images } from "../../../constants"
import Counter from "../../counter/Counter"

function CartCard({img, title, price}) {
  return (
    <View style={styles.container}>
      <View style={styles.foodImg}>
            <Image source={img}/>
      </View>
      <View>
        <Text style={styles.txt1}>{title}</Text>
        <Text style={styles.txt2}>Ksh. {price}</Text>
        <Counter/>
      </View>
    </View>
  )
}

export default CartCard
