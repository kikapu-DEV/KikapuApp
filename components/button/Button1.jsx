import { useState } from "react";
import { Text, TouchableOpacity, View, Alert, DevSettings } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { login, register, verifyEmail } from "../../services/Auth";
import styles from "./button1.style";
import { save } from "../../helpers/secureStore";
import Spinner from "../Spinner/spinner";
import useAuth from "../../helpers/hooks/useAuth";

function Button1({ title, screenName, color, iconName, formData = null }) {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);
	const { setUserInfo } = useAuth();

	const handleSubmission = async () => {
		try {
			if (screenName === "mainApp") {
				setLoading(true);
				const response = await login({
					email: formData.email,
					password: formData.password,
				});

				if (response.status === 200) {
					const userData = response.data.user;
					Alert.alert("Success", response.data.message, [
						{
							text: "OK",
							onPress: async () => {
								try {
									const role = userData.profile.role;
									await save("user", JSON.stringify(userData));
									setUserInfo(userData);

									if (role === "student" || role === "customer") {
										navigation.navigate("mainApp", { replace: true });
									} else if (role === "restaurant") {
										navigation.navigate("restMainApp", { replace: true });
									} else if (role === "farmer") {
										navigation.navigate("farmerMainApp", { replace: true });
									}

									setLoading(false);
								} catch (err) {
									console.log(err.message);
								}
							},
						},
					]);
				} else {
					Alert.alert("Error", response, [
						{
							text: "OK",
							onPress: () => {
								setLoading(false);
							},
						},
					]);
				}
			} else if (screenName === "signup") {
			} else if (screenName === "verify") {
				setLoading(true);
				const response = await register(formData);

				if (response.status === 201) {
					Alert.alert("Success", response.data.message, [
						{
							text: "OK",
							onPress: () => {
								setLoading(false);
								navigation.navigate("verify", {
									email: response.data.email,
									otp: response.data.otp,
								});
							},
						},
					]);
				} else {
					Alert.alert("Error", response, [
						{
							text: "OK",
							onPress: () => {
								setLoading(false);
							},
						},
					]);
				}
			} else if (screenName === "login") {
				setLoading(true);
				const response = await verifyEmail({
					email: formData.email,
					otp: formData.otpString,
				});

				if (response.status === 200) {
					Alert.alert("Success", response.data.message, [
						{
							text: "OK",
							onPress: () => {
								setLoading(false);
								navigation.navigate("login", {
									email: response.data.email,
								});
							},
						},
					]);
				} else {
					Alert.alert("Error", response, [
						{
							text: "OK",
							onPress: () => {
								setLoading(false);
							},
						},
					]);
				}
			}
		} catch (err) {
			Alert.alert("Error", err.message, [
				{
					text: "OK",
					onPress: () => setLoading(false),
				},
			]);
		}
	};

	return (
		<View>
			{/* <Text style={{ color: "#000" }}>{validation}</Text> */}
			<TouchableOpacity onPress={handleSubmission}>
				<View style={styles.btn1(color)}>
					<Ionicons name={iconName} size={24} color='white' />
					<Text style={styles.btn1Text}>{loading ? <Spinner /> : title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default Button1;
