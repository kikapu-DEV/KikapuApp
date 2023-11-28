import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./AddSuccess.style"
import { Ionicons } from '@expo/vector-icons';
import { COLORS, images } from "../../../constants";
import {useNavigation} from '@react-navigation/native';

function AddSuccess() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color={COLORS.whiteText} />
        </TouchableOpacity>
      </View>
      
      {/* body */}
      <View style={styles.body}>
            <View style={styles.img}>
                <Image source={images.basket}/>
            </View>

            <Text style={styles.txt}>Product added successfully</Text>
            <Text style={styles.txt1}>Add 5 more products so that your shop is more visible to users</Text>

            <View style={styles.row}>
                <Image source={images.c1}/>
                <View>
                    <Text style={styles.txt2}>Bell Pepper Red</Text>
                    <Text style={styles.txt3}>1kg, ksh4500</Text>
                </View>
            </View>

            {/* buttons */}
            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.btn} onPress={()=> navigation.goBack()}>
                    <Text style={styles.txt4}>Add Another</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.txt4}>Back to shop</Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default AddSuccess
