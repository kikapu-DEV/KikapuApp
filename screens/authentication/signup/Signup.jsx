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
import { Button1, SemiCircle } from "../../../components";
import Toast from "react-native-toast-message";

const data = [
  { label: "Customer", value: "customer" },
  { label: "Student", value: "student" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Farmer", value: "farmer" },
];
function Signup() {
  const navigation = useNavigation();
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let errors = {};
    // validate first name
    if (!signupFormData.firstName) {
      errors.firstName = "First name is required";
    }
    //   validate last name
    if (!signupFormData.lastName) {
      errors.lastName = "Last name is required";
    }
    //   validate email
    if (!signupFormData.email) {
      errors.email = "Email name is required";
    } else if (!/\S+@\S+\.\S+/.test(signupFormData.email)) {
      errors.email = "Email is invalid";
    }
    //   validate role
    if (!signupFormData.role) {
      errors.role = "Role is required";
    } else if (!data.some((item) => item.value === signupFormData.role)) {
      errors.role = "Invalid role";
    }
    // validate phone
    if (!signupFormData.phone) {
      errors.phone = "Phone number is required";
    } else if (signupFormData.phone > 10 || signupFormData.phone < 11) {
      errors.phone = "Phone number should be 10 digits eg. 0712345678";
    }
    // validate password
    if (!signupFormData.password) {
      errors.password = "Password is required";
    } else if (signupFormData.password < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

	setError(errors);
	return Object.keys(errors).length === 0
  };

  const handleSubmit =()=>{
	const isFormValid = validateForm();
	
	if (isFormValid){
		console.log("form submitted successfully");
		setSignupFormData({
			firstName: "",
			lastName: "",
			email: "",
			role: "",
			phone: "",
			password: "",
		})
	}
	else{
		console.log("Form has errors. Please correct them before submission")
	}

  }

  const showToast = (type, msg2, onHide) => {
    Toast.show({
      type: type,
      text1: type === "success" ? "Success" : "Error",
      text2: msg2,
      visibilityTime: 3000,
      autoHide: true,
      onHide: onHide,
    });
  };
  return (
    <View style={styles.container}>
      <SemiCircle title="SIGN UP" />
      <Toast />
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.registerContainer}>Register Here</Text>
        {/* row names */}
        <View style={styles.nameInputRow}>
          <View style={styles.nameSection}>

			{/* first name */}
            <Text>First Name</Text>
            <TextInput
              value={signupFormData.firstName}
              onChangeText={(text) =>
                setSignupFormData({ ...signupFormData, firstName: text })
              }
              style={styles.smallTextInput}
            />
            {error && (
              <Text style={{ color: COLORS.red, textAlign: "center" }}>
                {error.firstName}
              </Text>
            )}
          </View>

		  {/* last name */}
          <View style={styles.nameSection}>
            <Text>Last Name</Text>
            <TextInput
              value={signupFormData.lastName}
              onChangeText={(text) =>
                setSignupFormData({ ...signupFormData, lastName: text })
              }
              style={styles.smallTextInput}
            />
            {error && (
              <Text style={{ color: COLORS.red, textAlign: "center" }}>
                {error.lastName}
              </Text>
            )}
          </View>
        </View>

        {/* Email address */}
        <View style={styles.emailAddress}>
          <Text>Email address</Text>
          <TextInput
            value={signupFormData.email}
            onChangeText={(text) =>
              setSignupFormData({ ...signupFormData, email: text })
            }
            style={styles.textInput}
          />
          {error && (
            <Text style={{ color: COLORS.red, textAlign: "center" }}>
              {error.email}
            </Text>
          )}
        </View>

        {/* dropdown */}
        <View style={styles.dropdownContainer}>
          <Text>Role</Text>
          <Dropdown
            style={styles.dropdown}
            placeholder="Select Role"
            data={data}
            value={signupFormData.role}
            labelField="label"
            valueField="value"
            onChange={(item) =>
              setSignupFormData({ ...signupFormData, role: item.value })
            }
          />
          {error && (
            <Text style={{ color: COLORS.red, textAlign: "center" }}>
              {error.role}
            </Text>
          )}
        </View>

        {/* phone number */}
        <View style={styles.contactContainer}>
          <View style={styles.contactPreview}>
            <Image source={images.kenyanFlag} />
            <Text>+254</Text>
          </View>
          <TextInput
            maxLength={9}
            value={signupFormData.phone}
            onChangeText={(text) =>
              setSignupFormData({ ...signupFormData, phone: text })
            }
            style={styles.contactInput}
          />
          {error && (
            <Text style={{ color: COLORS.red, textAlign: "center" }}>
              {error.phone}
            </Text>
          )}
        </View>

        {/* PASSWORD */}
        <View style={styles.emailAddress}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            value={signupFormData.password}
            onChangeText={(text) =>
              setSignupFormData({ ...signupFormData, password: text })
            }
            style={styles.textInput}
          />
          {error && (
            <Text style={{ color: COLORS.red, textAlign: "center" }}>
              {error.password}
            </Text>
          )}
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
        <Button1
          title="SIGN ME UP"
          screenName="verify"
          color={COLORS.primary}
          formData={signupFormData}
          showToast={showToast}
		  onSubmit={handleSubmit}
		  isFormValid={isFormValid}
        />
        {/* <Toast/> */}
      </ScrollView>
    </View>
  );
}

export default Signup;
