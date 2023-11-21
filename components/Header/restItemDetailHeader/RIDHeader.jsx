import { Image, TouchableOpacity, View } from "react-native";
import styles from "./RIDHeader.style";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../../../constants";
import {useNavigation} from '@react-navigation/native'

function RIDHeader() {
    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
         <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View style={styles.iconBox}>
                <Ionicons name="chevron-back" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconBox}>
                <Ionicons name="md-search-outline" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.img}>
            <Image source={images.arabGinger2}/>
        </View>
    </View>
   
  );
}

export default RIDHeader;
