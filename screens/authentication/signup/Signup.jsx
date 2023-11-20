import {
	Image,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./signup.style";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { COLORS, images } from "../../../constants";
import { Button1 } from "../../../components";

const data = [
	{ label: "Customer", value: "customer" },
	{ label: "Student", value: "student" },
	{ label: "Restaurant", value: "restaurant" },
	{ label: "Farmer", value: "farmer" },
];
function Signup() {
	const navigation = useNavigation();
	const [signupFormData, setSignupFormData] = useState({});
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.formContainer}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 30 }}
			>
				<Text style={styles.registerContainer}>Register Here</Text>
				{/* row names */}
				<View style={styles.nameInputRow}>
					<View style={styles.nameSection}>
						<Text>First Name</Text>
						<TextInput
							value={signupFormData.firstName}
							onChangeText={(text) =>
								setSignupFormData({ ...signupFormData, firstName: text })
							}
							style={styles.smallTextInput}
						/>
					</View>
					<View style={styles.nameSection}>
						<Text>Last Name</Text>
						<TextInput
							value={signupFormData.lastName}
							onChangeText={(text) =>
								setSignupFormData({ ...signupFormData, lastName: text })
							}
							style={styles.smallTextInput}
						/>
					</View>
				</View>
				{/* other input fields */}
				<View style={styles.emailAddress}>
					<Text>Email address</Text>
					<TextInput
						value={signupFormData.email}
						onChangeText={(text) =>
							setSignupFormData({ ...signupFormData, email: text })
						}
						style={styles.textInput}
					/>
				</View>
				{/* dropdown */}
				<View style={styles.dropdownContainer}>
					<Text>Role</Text>
					<Dropdown
						style={styles.dropdown}
						placeholder='Select Role'
						data={data}
						value={signupFormData.role}
						labelField='label'
						valueField='value'
						onChange={(item) =>
							setSignupFormData({ ...signupFormData, role: item.value })
						}
					/>
				</View>
				{/* phone number */}
				<View style={styles.contactContainer}>
					<View style={styles.contactPreview}>
						<Image source={images.kenyanFlag} />
						<Text>+254</Text>
					</View>
					<TextInput
						maxLength={9}
						value={signupFormData.phone}
						onChangeText={(text) =>
							setSignupFormData({ ...signupFormData, phone: text })
						}
						style={styles.contactInput}
					/>
				</View>
				{/* PASSWORD */}
				<View style={styles.emailAddress}>
					<Text>Password</Text>
					<TextInput
						secureTextEntry={true}
						value={signupFormData.password}
						onChangeText={(text) =>
							setSignupFormData({ ...signupFormData, password: text })
						}
						style={styles.textInput}
					/>
				</View>
				<View style={styles.signUpText}>
					<Pressable
						onPress={() => navigation.navigate("login")}
						style={styles.pressableText}
					>
						<Text>Been here before?</Text>
						<Text
							style={{
								marginLeft: 5,
								borderBottomWidth: 1,
								borderStyle: "dotted",
							}}
						>
							Sign In
						</Text>
					</Pressable>
				</View>
				<Button1
					title='SIGN ME UP'
					screenName='verify'
					color={COLORS.primary}
					formData={signupFormData}
				/>
			</ScrollView>
		</View>
	);
}

export default Signup;
