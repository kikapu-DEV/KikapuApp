import React, { useState, useRef, useEffect } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./OTP.style";
import { Button1, SemiCircle2 } from "../../../components";
import { COLORS } from "../../../constants";
import Toast from "react-native-toast-message";

function OTP({ navigation }) {
	const [otp, setOtp] = useState({
		digit1: '',
		digit2: '',
		digit3: '',
		digit4: '',
		digit5: '',
		digit6: '',
	});
	const [resendDisabled, setResendDisabled] = useState(false);
	const [timer, setTimer] = useState(30);

	const refs = Array.from({ length: 6 }, () => useRef());

	const focusInput = (index) => {
		if (index < refs.length - 1) {
			refs[index + 1].current.focus();
		}
	};

	const handleKeyPress = (index, key) => {
		if (key === "Backspace" && index > 0) {
			refs[index - 1].current.focus();
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

	const verifyOtp = () => {
		const { digit1, digit2, digit3, digit4, digit5, digit6 } = otp;
		const enteredOtp = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
		const expectedOtp = '123456';

		if (enteredOtp === expectedOtp) {
			showToast('success', 'OTP verified', () => {
				setTimeout(() => {
					navigation.navigate('password_reset');
				}, 3000); // Wait for 3 seconds before navigating
			});
			return true;
		} else {
			showToast('error', 'Invalid OTP');
			return false;
		}
	};

	const resendOTP = () => {
		setResendDisabled(true);
		setTimer(30);

		setTimeout(() => {
			setResendDisabled(false);
		}, 30000); // Enable resend button after 30 seconds
	};

	useEffect(() => {
		let interval = null;
		if (resendDisabled && timer > 0) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		} else if (timer === 0) {
			setResendDisabled(false);
		}

		return () => clearInterval(interval);
	}, [resendDisabled, timer]);

	return (
		<View style={styles.container}>
			<SemiCircle2 />
			<Toast />
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
						value={otp[`digit${index + 1}`]}
						onChangeText={(text) => {
							setOtp({
								...otp,
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
				screenName='password_reset'
				color={COLORS.primary}
				onSubmit={verifyOtp}
				showToast={showToast}
			/>
			<View style={styles.signUpText}>
				<Pressable
					onPress={resendOTP}
					disabled={resendDisabled}
					style={styles.pressableText}
				>
					<Text>Didn’t receive OTP?</Text>
					<Text style={{ marginLeft: 5, borderBottomWidth: 1, borderStyle: "dotted" }}>
						{resendDisabled ? `Resend in ${timer}s` : "Resend"}
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default OTP;
