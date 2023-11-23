import { Image, Text, View } from "react-native"
import styles from "./CreditCard.style"
import { images } from "../../../constants"

function CreditCard() {
  return (
    <View style={styles.container}>
        <Text style={styles.txt1}>4381  3771  9090  4741</Text>
        <View style={styles.row}>
            <View>
                <Text>kirui chepkorir</Text>
                <Text>11/27</Text>
            </View>
            <Image source={images.masterCard}/>
        </View>
    </View>
  )
}

export default CreditCard
