import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./login.styles";
import { Button1 } from "../../../components";
import { COLORS } from "../../../constants";
import Toast from "react-native-toast-message";

function Login({ navigation }) {
	const [loginFormData, setLoginForm] = useState({});

	const [error, setError] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);

	const validateForm = () => {
		let errors = {};
		if (!loginFormData.email) {
			errors.email = "email is required";
		} else if (!loginFormData.password) {
			errors.password = "password is required";
		}
		setError(errors);
		setIsFormValid(Object.keys(errors).length === 0);
	};
	const handleSubmit = async () => {
		// validateForm();

		if (isFormValid) console.log("Form submitted successfully");
		else console.log("Form has errors. Correct them");
	};
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
			<Toast />
			<ScrollView
				style={styles.loginFormContainer}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.welcomeText}>Welcome Back!</Text>
				<Text style={{ marginBottom: 20 }}>Email Address</Text>
				<TextInput
					value={loginFormData.email}
					onChangeText={(text) =>
						setLoginForm({ ...loginFormData, email: text })
					}
					style={styles.textInput}
				/>
				{error && (
					<Text style={{ color: COLORS.red, textAlign: "center" }}>
						{error.email}
					</Text>
				)}

				<Text style={{ marginBottom: 20 }}>Password</Text>
				<TextInput
					value={loginFormData.password}
					secureTextEntry={true}
					onChangeText={(text) =>
						setLoginForm({ ...loginFormData, password: text })
					}
					style={styles.textInput}
				/>
				{error && (
					<Text style={{ color: COLORS.red, textAlign: "center" }}>
						{error.password}
					</Text>
				)}

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
				<Button1
					title='SIGN ME IN'
					screenName='mainApp'
					color={COLORS.primary}
					formData={loginFormData}
					onSubmit={handleSubmit}
					showToast={showToast}
				/>
			</ScrollView>
		</View>
	);
}

export default Login;
