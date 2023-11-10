import { Alert, Image, Text, TextInput, View } from "react-native";
import styles from "./studentPayment.style";
import { COLORS, images } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwipeButton from 'rn-swipe-button';
import { SwipeBtn } from "../../../components";

function StudentPayment() {
    const handlePayment = () =>{
        Alert.alert("Your kikapu account has insufficient balance.", "Would you like kikapu to loan you ksh. 250?",[
            {
                text: "NO",
                onPress: ()=>{}
            },
            {
                text: "YES",
                onPress: ()=>{}
            }
        ])
    }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image  source={images.kikapuLogo} />
      </View>
      <Text style={styles.text1}>Make payment</Text>
      <Text style={styles.text2}>cheese burgers</Text>
      <Text style={styles.text2}>Blonde roast</Text>
      <View style={styles.smallAvatar}>
        <Image source={images.smallAvatar} />
      </View>
      <Text style={styles.text4}>Paula Njoroge</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} />
      </View>

      <View style={styles.promoTexts}>
        <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={24}
            color={COLORS.grey}
          />
          <Text style={styles.text5}>Promo code</Text>
        </View>

        <Text style={styles.text6}>APPLY</Text>
      </View>

      <View style={styles.totalBox}>
        <Text>Total</Text>
        <Text style={{fontSize: 16, fontWeight: '400'}}>Ksh. 1500</Text>
      </View>

      {/* swipe button */}
      <View style={styles.swipeBtn}>
      <SwipeButton 
      thumbIconComponent={SwipeBtn} railBackgroundColor={COLORS.secondary}
      title="Swipe to pay"
      thumbIconBackgroundColor="#FFFFFF"
      railStyles={{
        backgroundColor: COLORS.lightGreen,
        borderColor: COLORS.lightGreen,
      }}
      titleStyles={{
        color: COLORS.whiteText,
        fontSize: 18
      }}
      thumbIconBorderColor={COLORS.whiteText}
      railBorderColor={COLORS.secondary}
      onSwipeSuccess={()=> handlePayment()}
      />
    </View>
    </View>
  );
}

export default StudentPayment;
