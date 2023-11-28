import { Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styles from "./semicircle.style"
import { icons } from "../../constants"

function SemiCircle({title}) {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={()=> navigation.goBack()}>
            <Image source={icons.backBtn1} resizeMode="contain" style={styles.backBtn}/>
        </TouchableOpacity>
        <Text style={styles.circleText}>{title}</Text>
    </View>
  )
}

export default SemiCircle
