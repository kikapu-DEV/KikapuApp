import { useState, useRef, useEffect } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./verify.style";
import { Button1 } from "../../../components";
import { COLORS } from "../../../constants";

function Verify({ route }) {
	const { email, otp } = route.params;

	const refs = Array.from({ length: 6 }, () => useRef());
	const navigation = useNavigation();
	const [verifyFormData, setVerifyFormData] = useState({});

	const focusInput = (index) => {
		if (index < refs.length - 1) {
			refs[index + 1].current.focus();
		}
	};

	const handleKeyPress = (index, key) => {
		if (key === "Backspace" && index > 0) {
			// Move focus to the previous input when Backspace is pressed
			refs[index - 1].current.focus();
		}
	};

	useEffect(() => {
		setVerifyFormData({
			digit1: otp[0],
			digit2: otp[1],
			digit3: otp[2],
			digit4: otp[3],
			digit5: otp[4],
			digit6: otp[5],
		});
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.verifyText}>Verify your account</Text>
			<Text style={styles.verifyText2}>
				Enter the 6-digit code sent to your email address
			</Text>
			<View style={styles.verifyRow}>
				{Array.from({ length: 6 }, (_, index) => (
					<TextInput
						key={index}
						ref={refs[index]}
						maxLength={1}
						value={verifyFormData[`digit${index + 1}`]}
						onChangeText={(text) => {
							setVerifyFormData({
								...verifyFormData,
								[`digit${index + 1}`]: text,
							});

							if (text.length > 0) {
								focusInput(index);
							}
						}}
						onKeyPress={({ nativeEvent: { key } }) =>
							handleKeyPress(index, key)
						}
						style={styles.verifyBoxes}
					/>
				))}
			</View>
			<Button1
				title='Verify'
				screenName='login'
				color={COLORS.primary}
				formData={{
					email,
					otpString: `${verifyFormData.digit1}${verifyFormData.digit2}${verifyFormData.digit3}${verifyFormData.digit4}${verifyFormData.digit5}${verifyFormData.digit6}`,
				}}
			/>
			<View style={styles.signUpText}>
				<Pressable
					onPress={() => {
						navigation.navigate("verify");
					}}
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
	);
}

export default Verify;
