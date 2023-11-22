import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./AddCard.style"
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../../../constants";
import { Button3 } from "../../../components";


function AddCard() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={35}
            color={COLORS.secondary}
          />
          </TouchableOpacity>
          <Text style={styles.txt1}>Add new card</Text>
        </View>

        {/* body */}
        <View style={styles.body}>
            <View>
                <Image source={images.addCard}/>
            </View>
            
            <Text style={styles.txt2}>Card holders name</Text>
            <TextInput style={styles.textInput}/>

            <Text style={styles.txt2}>Card number</Text>
            <TextInput style={styles.textInput}/>

            <View style={styles.cardRow}>
                <View style={styles.left}>
                    <Text style={styles.txt2}>expiry date</Text>
                    <TextInput style={styles.textInput}/>
                </View>

                <View style={styles.left}>
                    <Text style={styles.txt2}>3-digit CVV</Text>
                    <TextInput style={styles.textInput}/>
                </View>
            </View>

            {/* button */}
            <Button3 title='Continue' color={COLORS.secondary}/>
        </View>
    </View>
  )
}

export default AddCard
