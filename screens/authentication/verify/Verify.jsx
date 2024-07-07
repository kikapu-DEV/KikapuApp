import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import styles from "./verify.style";
import { Button1, SemiCircle2 } from "../../../components";
import { COLORS } from "../../../constants";
import Toast from "react-native-toast-message";
import { emailRegex, phoneRegex } from "../../../constants/rejex";

const data = [
	{ label: 'Email', value: 'email' },
	{ label: 'Phone Number', value: 'phone' }
];

function Verify() {
	const [selectedOption, setSelectedOption] = useState('email');
	const [emailOrPhone, setEmailOrPhone] = useState('');
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		let errors = {};

		if (!emailOrPhone.trim()) {
			errors.emailOrPhone = 'This field is required';
		} else if (selectedOption === 'email' && !emailRegex.test(emailOrPhone)) {
			errors.emailOrPhone = 'Please enter a valid email.';
		} else if (selectedOption === 'phone' && !phoneRegex.test(emailOrPhone)) {
			errors.emailOrPhone = 'Please enter a valid phone number.';
		}

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = () => {
		const isFormValid = validateForm();

		if (isFormValid) {
			console.log('Form submitted successfully');
			return true;
			
		} else {
			console.log('Form has errors. Correct them');
			return false;
		}
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
			<SemiCircle2 />
			<Toast />
			<Text style={styles.verifyText}>Reset Password</Text>
			<Text style={styles.verifyText3}>Forgot your password? No problem! Just enter your email or phone number to get verification code.</Text>
			<View style={styles.dropdownContainer}>
				<Text>Select Method to Verify Account</Text>
				<Dropdown
					style={styles.dropdown}
					placeholder="Select Contact Method"
					data={data}
					value={selectedOption}
					labelField="label"
					valueField="value"
					onChange={(item) => setSelectedOption(item.value)}
				/>
			</View>
			<Text style={{ marginBottom: 20 }}>
				{selectedOption === 'email' ? 'Email Address' : 'Phone Number'}
			</Text>
			<TextInput
				value={emailOrPhone}
				onChangeText={(text) => setEmailOrPhone(text)}
				style={styles.textInput}
				keyboardType={selectedOption === 'email' ? 'email-address' : 'phone-pad'}
			/>
			{errors.emailOrPhone && (
				<Text style={{ color: COLORS.red, textAlign: "left" }}>
					{errors.emailOrPhone}
				</Text>
			)}
			<Button1
				title="Verify"
				screenName="otp"
				color={COLORS.primary}
				onSubmit={handleSubmit}
				showToast={showToast}
			/>
		</View>
	);
}

export default Verify;
