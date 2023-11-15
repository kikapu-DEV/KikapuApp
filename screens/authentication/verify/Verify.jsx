import { useState, useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./verify.style";
import { Button1 } from "../../../components";
import { COLORS } from "../../../constants";

function Verify() {
	const navigation = useNavigation();
	const ref = useRef();
	const [verifyFormData, setVerifyFormData] = useState({});
	return (
		<View style={styles.container}>
			<Text style={styles.verifyText}>Verify your account</Text>
			<Text style={styles.verifyText2}>
				Enter the 6-digit code sent to your email address
			</Text>
			<View style={styles.verifyRow}>
				<TextInput
					maxLength={1}
					value={verifyFormData.one}
					onChange={(e) => {
						setVerifyFormData({ ...verifyFormData, one: text });
					}}
					style={styles.verifyBoxes}
				/>
				<TextInput
					maxLength={1}
					value={verifyFormData.two}
					onChange={(e) => {
						const text = e.nativeEvent.text;
						setVerifyFormData({ ...verifyFormData, two: text });
					}}
					returnKeyType='next'
					style={styles.verifyBoxes}
				/>
				<TextInput
					maxLength={1}
					value={verifyFormData.three}
					onChange={(e) => {
						const text = e.nativeEvent.text;
						setVerifyFormData({ ...verifyFormData, three: text });
					}}
					style={styles.verifyBoxes}
				/>
				<TextInput
					maxLength={1}
					value={verifyFormData.four}
					onChange={(e) => {
						const text = e.nativeEvent.text;
						setVerifyFormData({ ...verifyFormData, four: text });
					}}
					style={styles.verifyBoxes}
				/>
				<TextInput
					maxLength={1}
					value={verifyFormData.five}
					onChange={(e) => {
						const text = e.nativeEvent.text;
						setVerifyFormData({ ...verifyFormData, five: text });
					}}
					style={styles.verifyBoxes}
				/>
				<TextInput
					maxLength={1}
					value={verifyFormData.six}
					onChange={(e) => {
						const text = e.nativeEvent.text;
						setVerifyFormData({ ...verifyFormData, six: text });
					}}
					style={styles.verifyBoxes}
				/>
			</View>
			<Button1 title='Verify' screenName='login' color={COLORS.primary} />
			<View style={styles.signUpText}>
				<Pressable
					onPress={() => navigation.navigate("verify")}
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
