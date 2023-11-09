import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./login.styles";
import { Button1 } from "../../../components";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginFormContainer}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={{ marginBottom: 20 }}>Phone Number</Text>
        <TextInput style={styles.textInput} />

        <Text style={{ marginBottom: 20 }}>Enter OTP Code</Text>
        <TextInput style={styles.textInput} />
        <View style={styles.signUpText}>
          <Pressable
            onPress={() => navigation.navigate("signup")}
            style={styles.pressableText}
          >
            <Text>New to Kikapu?</Text>
            <Text
              style={{
                marginLeft: 5,
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
        <Button1 title="SIGN ME IN" screenName="mainApp" />
      </View>
    </View>
  );
}

export default Login;
