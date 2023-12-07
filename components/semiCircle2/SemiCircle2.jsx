import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native"
import { icons } from "../../constants"
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./semicircle2.style";

function SemiCircle2() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={()=> navigation.goBack()}>
            <Image source={icons.backBtn2} resizeMode="contain" style={styles.backBtn}/>
        </TouchableOpacity>
    </View>
  )
}

export default SemiCircle2
