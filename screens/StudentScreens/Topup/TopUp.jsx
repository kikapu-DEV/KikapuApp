import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./topup.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

function TopUp() {
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
      </View>

      {/* body */}
      <Text style={styles.txt1}>Top up</Text>

      <View style={styles.amountInput}>
        <Text>Amount (Ksh)</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View>
        <Text style={styles.txt2}>Payment Method</Text>

        {/* mpesa */}
        <Text style={styles.txt2}>M-pesa</Text>
        <TouchableOpacity onPress={()=>{}}>
          <View style={styles.mpesa}>
            <Image source={images.mpesa} />
            <MaterialIcons name="navigate-next" size={24} color="black" />
          </View>
        </TouchableOpacity>

        {/* credit card */}
        <Text style={styles.txt2}>Credit card</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('addCard')}>
          <View style={styles.mpesa}>
            <Image source={images.creditCard} />
            <MaterialIcons name="navigate-next" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopUp;
