import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./login.styles";
import { Button1 } from "../../../components";
import { COLORS } from "../../../constants";

function Login({ navigation }) {
	const [loginFormData, setLoginForm] = useState({});

	// for validation
	const [error, setError] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	const validateform =()=>{
		let errors  = {};
		if (!loginFormData.email){
			errors.email = 'email is required'
		}else if(!loginFormData.password){
			errors.password = 'password is required'
		}
		setError(errors);
		setIsFormValid(Object.keys(errors).length === 0);
	}
	const handleSubmit = async () =>{
		validateform();

		if(isFormValid) console.log('Form submitted successfully');
		else console.log('Form has errors. Correct them');
	}

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
				<Text style={{color: COLORS.red, textAlign: 'center'}}>{error.email}</Text>

				<Text style={{ marginBottom: 20 }}>Password</Text>
				<TextInput
					value={loginFormData.password}
					secureTextEntry={true}
					onChangeText={(text) =>
						setLoginForm({ ...loginFormData, password: text })
					}
					style={styles.textInput}
				/>
						<Text style={{color: COLORS.red, textAlign: 'center'}}>{error.password}</Text>
	
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
				/>
			</ScrollView>
		</View>
	);
}

export default Login;
