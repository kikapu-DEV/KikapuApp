import { useState } from "react";
import { Text, TouchableOpacity, View,     } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { login, register, verifyEmail } from "../../services/Auth";
import styles from "./button1.style";
import { getUser, saveUser } from "../../helpers/secureStore";

function Button1({
  title,
  screenName,
  color,
  iconName,
  formData = null,
  onSubmit,
  showToast
}) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleSubmission = async () => {
    try {
      if (screenName === "mainApp") {
        setLoading(true);
        if (onSubmit) {
          await onSubmit();
        }
        setLoading(false);
        const response = await login({
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 200) {
          const userData = response.data.user;
		  showToast('success', response)
          setLoading(false);
          await saveUser("user", JSON.stringify(userData));

          if (
            userData.profile.role === "student" ||
            userData.profile.role === "customer"
          )
            navigation.navigate("mainApp");
          if (userData.profile.role === "restaurant")
            navigation.navigate("restMainApp");
          if (userData.profile.role === "farmer")
            navigation.navigate("farmerMainApp");
        } else {
          showToast("error", response);
          setLoading(false);
        }
      } else if (screenName === "signup") {
      } else if (screenName === "verify") {
        setLoading(true);
        const response = await register(formData);

        if (response.status === 201) {
				showToast("success", response.data.message)
                setLoading(false);
                navigation.navigate("verify", {
                  email: response.data.email,
                  otp: response.data.otp,
                });
        } else {
			showToast('error', response);
			setLoading(false);
        }
      } else if (screenName === "login") {
        setLoading(true);
        const response = await verifyEmail({
          email: formData.email,
          otp: formData.otpString,
        });

        if (response.status === 200) {
			showToast('success', response.data.message)
                setLoading(false);
                navigation.navigate("login", {
                  email: response.data.email,
                });
        } else {
			showToast('error', response)
          	setLoading(false);
        }
      }
    } catch (err) {
		showToast('error', err.message)
        setLoading(false);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSubmission}>
        <View style={styles.btn1(color)}>
          <Ionicons name={iconName} size={24} color="white" />
          <Text style={styles.btn1Text}>{loading ? "loading..." : title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button1;
