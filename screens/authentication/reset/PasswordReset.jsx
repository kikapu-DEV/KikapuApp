import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./PasswordReset.style";
import { Button1, SemiCircle2 } from "../../../components";
import { COLORS } from "../../../constants";
import Toast from "react-native-toast-message";
import { passwordMinLengthRegex } from "../../../constants/rejex";

function PasswordReset() {
	const [formData, setFormData] = useState({});
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	// const { email } = route.params;

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

	const validateForm = () => {
		let errors = {};

		if (!password.trim()) {
			errors.password = "Password is required";
		} else if (!passwordMinLengthRegex.test(password)) {
			errors.password = "Password should have a minimum of 8 characters.";
		}
		if (!confirmPassword.trim()) {
			errors.confirmPassword = "Confirm Password is required";
		}
		if (password !== confirmPassword) {
			errors.confirmPassword = "Passwords do not match";
		}

		setError(errors);

		// If form is valid to change user password and login user, with the email and new password
		// if (!Object.keys(errors).length === 0) {
		// 	setFormData({ email: email, password: password });
		// }
		return Object.keys(errors).length === 0;
	};

	const handleResetPassword = () => {
		const isFormValid = validateForm();

		if (isFormValid) {
			console.log('Form submitted successfully');
			return true;

		} else {
			console.log('Form has errors. Correct them');
			return false;
		}
	};

	return (
		<View style={styles.container}>
			<SemiCircle2 />
			<Toast />
			<Text style={styles.verifyText}>Reset Your Password</Text>
			<Text style={styles.verifyText2}>Choose a new & Strong Password for your account.</Text>
			<View>
				<Text style={styles.label}>Password</Text>
				<TextInput
					value={password}
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
					style={styles.textInput}
				/>
				{error?.password && (
					<Text style={styles.errorText}>{error.password}</Text>
				)}
			</View>
			<View>
				<Text style={styles.label}>Confirm Password</Text>
				<TextInput
					value={confirmPassword}
					secureTextEntry={true}
					onChangeText={(text) => setConfirmPassword(text)}
					style={styles.textInput}
				/>
				{error?.confirmPassword && (
					<Text style={styles.errorText}>{error.confirmPassword}</Text>
				)}
			</View>
			<Button1
				title="Reset Password"
				screenName="login"
				color={COLORS.primary}
				onPress={handleResetPassword}
				formData={formData}
				showToast={showToast}
			/>
		</View>
	);
}

export default PasswordReset;
