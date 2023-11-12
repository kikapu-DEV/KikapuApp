import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./signup.style";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { COLORS, images } from "../../../constants";
import { Button1 } from "../../../components";

const data = [
  { label: "customer", value: 1 },
  { label: "Restaurant", value: 2 },
  { label: "farmer", value: 3 },
];
function Signup() {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  return (
    <View style={styles.container} >
      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 30}}>
        <Text style={styles.registerContainer}>Register Here</Text>
        {/* row names */}
        <View style={styles.nameInputRow}>
          <View style={styles.nameSection}>
            <Text>First Name</Text>
            <TextInput style={styles.smallTextInput} />
          </View>
          <View style={styles.nameSection}>
            <Text>Last Name</Text>
            <TextInput style={styles.smallTextInput} />
          </View>
        </View>
        {/* other input fields */}
        <View style={styles.emailAddress}>
          <Text>Email address</Text>
          <TextInput style={styles.textInput} />
        </View>
        {/* dropdown */}
        <View style={styles.dropdownContainer}>
          <Text>Role</Text>
          <Dropdown
            style={styles.dropdown}
            placeholder="Select Role"
            data={data}
            value={value}
            labelField="label"
            valueField="value"
            onChange={(item) => setValue(item.value)}
          />
        </View>
        {/* phone number */}
        <View style={styles.contactContainer}>
          <View style={styles.contactPreview}>
            <Image source={images.kenyanFlag} />
            <Text>+254</Text>
          </View>
          <TextInput style={styles.contactInput} />
        </View>
        {/* PASSWORD */}
        <View style={styles.emailAddress}>
          <Text>Email address</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.signUpText}>
          <Pressable
            onPress={() => navigation.navigate("login")}
            style={styles.pressableText}
          >
            <Text>Been here before?</Text>
            <Text
              style={{
                marginLeft: 5,
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
        <Button1 title="SIGN ME UP" screenName="verify" color={COLORS.primary}/>
      </ScrollView>
    </View>
  );
}

export default Signup;
