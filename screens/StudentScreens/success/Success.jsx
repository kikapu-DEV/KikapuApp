import { Image, Text, View } from "react-native"
import styles from "./Success.style"
import { Button3, CloseBtn } from "../../../components"
import { COLORS, images } from "../../../constants"

function Success() {
  return (
    <View style={styles.container}>
        <View style={styles.closeBtnContainer}>
            <CloseBtn/>
        </View>

        <View style={styles.contentContainer}>
            <View>
                <Image source={images.success}/>
            </View>
                <Text style={styles.text1}>Order successfully placed</Text>
                <Text style={styles.text2}>Your order <Text style={styles.text3}> #33-A45E</Text>  has been successfully processed.</Text>
            <Button3 title="Continue Shopping" color={COLORS.secondary} screenName="Home"/>
        </View>
     
    </View>
  )
}

export default Success
