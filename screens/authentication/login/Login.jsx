import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./login.styles";
import { Button1 } from "../../../components";
import { COLORS } from "../../../constants";

function Login({ navigation }) {
	const [loginFormData, setLoginForm] = useState({});

	// for validation
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');


	return (
		<View style={styles.container}>
			<ScrollView style={styles.loginFormContainer}showsVerticalScrollIndicator={false}>
				<Text style={styles.welcomeText}>Welcome Back!</Text>
				<Text style={{ marginBottom: 20 }}>Email Address</Text>
				<TextInput
					value={loginFormData.email}
					onChangeText={(text) =>
						setLoginForm({ ...loginFormData, email: text })
					}
					style={styles.textInput}
				/>

				<Text style={{ marginBottom: 20 }}>Password</Text>
				<TextInput
					value={loginFormData.password}
					secureTextEntry={true}
					onChangeText={(text) =>
						setLoginForm({ ...loginFormData, password: text })
					}
					style={styles.textInput}
				/>
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
				/>
			</ScrollView>
		</View>
	);
}

export default Login;
