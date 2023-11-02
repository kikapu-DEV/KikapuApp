import { Pressable, Text, TextInput, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./verify.style"
import { Button1 } from "../../components"

function Verify() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <Text style={styles.verifyText}>Verify your account</Text>
       <Text style={styles.verifyText2}>Enter the 5-digit code sent to your phone number</Text>
       <View style={styles.verifyRow}>
        <TextInput style={styles.verifyBoxes}/>
        <TextInput style={styles.verifyBoxes}/>
        <TextInput style={styles.verifyBoxes}/>
        <TextInput style={styles.verifyBoxes}/>
        <TextInput style={styles.verifyBoxes}/>
       </View>
       <Button1 title="Verify" screenName="login"/>
       <View style={styles.signUpText}>
          <Pressable
            onPress={() => navigation.navigate("verify")}
            style={styles.pressableText}
          >
            <Text>Didn’t receive OTP?</Text>
            <Text
              style={{
                marginLeft: 5,
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              Resend in 30 seconds
            </Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Verify
