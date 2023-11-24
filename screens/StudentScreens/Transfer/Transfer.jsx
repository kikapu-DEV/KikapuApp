import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./transfer.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, images } from "../../../constants";
import { Feather } from '@expo/vector-icons';
import SwipeButton from 'rn-swipe-button';
import { SwipeBtn } from "../../../components";
import { useState } from "react";


function Transfer() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const handleButtonPress = (value) =>{
    if (value === '<') setAmount(prevAmount => prevAmount.slice(0, -1))
    const actions = {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '0': '0',
      '.': '.',
    };
    const action = actions[value];
    if (action !== undefined) {
      setAmount(prevState => prevState + action)
    }
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.txt1}>Transfer Funds</Text>
      </View>

      {/* BODY */}
      <View style={styles.user}>
        <View style={styles.left}>
          <Image source={images.avatar1}/>
          <Text>Samantha</Text> 
        </View>
           <Feather name="chevron-down" size={24} color="black" />
      </View>

      <TextInput 
      keyboardType="numeric"
      style={styles.TextInput} 
      placeholder="Ksh."
      value={amount}
      onChangeText={(text)=> setAmount(text)}
      />

      {/* buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('1')}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('2')}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('3')}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('4')}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('5')}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('6')}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('7')}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('8')}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('9')}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('.')}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('0')}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> handleButtonPress('<')}>
        <Ionicons name="chevron-back-circle-outline" size={30} color={COLORS.secondary} />        
        </TouchableOpacity>
      </View>

      {/* swipe btn */}
      <View style={styles.swipeBtnContainer}>
      <SwipeButton 
      thumbIconComponent={SwipeBtn} railBackgroundColor={COLORS.secondary}
      title="Swipe to send"
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
      // onSwipeSuccess={()=> handlePayment()}
      />
    </View>
    </View>
  );
}

export default Transfer;
