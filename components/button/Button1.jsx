import { Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styles from "./button1.style"
function Button1({title, screenName}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate(screenName)}>
      <View style={styles.btn1}>
        <Text style={styles.btn1Text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button1
