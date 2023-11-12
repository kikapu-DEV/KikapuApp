import { Image, Text, View } from "react-native"
import styles from "./orderCard.style"
import { images } from "../../../constants"

function OrderCard() {
  return (
    <View style={styles.container}>
        <View>
            <Image source={images.restFood} resizeMode="contain"/>
        </View>
        <View style={styles.leftContent}>
            <Text style={styles.text1}>mama burger</Text>
            <Text style={styles.text2}>ksh. 1750</Text>
            <Text style={styles.text3}>19 jun, 2022 1: 35 PM </Text>
            <View style={styles.statusBtn}>
                <Text style={styles.statusTxt}>Completed</Text>
            </View>
        </View>
    </View>
  )
}

export default OrderCard
