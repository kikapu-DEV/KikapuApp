import {
	Alert,
	Image,
	Pressable,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./profile.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { logout } from "../../../helpers/secureStore";
import useAuth from "../../../helpers/hooks/useAuth";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../../services/Auth";
import Spinner from "../../../components/Spinner/spinner";

function Profile() {
	const navigation = useNavigation();
	const { user, setUserInfo } = useAuth();

	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["userProfile"],
		queryFn: getUserProfile,
	});

	const handleLogout = () => {
		Alert.alert("Are you sure you want to logout?", "", [
			{
				text: "YES",
				onPress: async () => {
					await logout();
					setUserInfo(null);
				},
			},
			{
				text: "NO",
			},
		]);
	};

	const handleDelete = () => {
		Alert.alert(
			"Are you sure you want to delete the account?",
			"You wont be able to recover it",
			[
				{
					text: "YES I WANT TO DELETE!",
					onPress: () => {
						navigation.navigate("onBoarding");
					},
				},
				{
					text: "NO I DONT WANT TO DELETE",
				},
			]
		);
	};

	if (isLoading) return <Spinner />;
	if (error) return <Text>{error.message}</Text>;

	const userData = data.user;

	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<View style={styles.profileIcon}>
					<TouchableOpacity onPress={() => {}}>
						<Image
							source={userData?.profile.avatar ? user.avatar : images.avatar2}
							width={400}
							height={400}
						/>

						<View style={styles.changeBtn}>
							<Text style={styles.changeTxt}>Change</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.profileName}>
				<Text style={styles.pNameTxt}>
					{userData?.profile.firstName && userData?.profile.lastName
						? `${userData?.profile.firstName} ${userData?.profile.lastName}`
						: "Guest"}
				</Text>
				<TouchableOpacity onPress={() => {}}>
					<View>
						<AntDesign name='edit' size={24} color='black' />
					</View>
				</TouchableOpacity>
			</View>

			{/* profile list */}
			<View style={styles.profileList}>
				<TouchableOpacity onPress={() => {}}>
					<View style={styles.list}>
						<View style={styles.leftList}>
							<View style={styles.icon}>
								<MaterialCommunityIcons
									name='account-outline'
									size={24}
									color='black'
								/>
							</View>
							<Text>Profile</Text>
						</View>
						<MaterialIcons name='navigate-next' size={24} color='black' />
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}}>
					<View style={styles.list}>
						<View style={styles.leftList}>
							<View style={styles.icon}>
								<Ionicons
									name='ios-notifications-outline'
									size={24}
									color='black'
									style={styles.notificationIcon}
								/>
							</View>
							<Text>Notifications</Text>
						</View>
						<MaterialIcons name='navigate-next' size={24} color='black' />
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}}>
					<View style={styles.list}>
						<View style={styles.leftList}>
							<View style={styles.icon}>
								<Octicons name='key' size={24} color='black' />
							</View>
							<Text>Login settings</Text>
						</View>
						<MaterialIcons name='navigate-next' size={24} color='black' />
					</View>
				</TouchableOpacity>
			</View>

			{/* logout and delete account texts */}
			<View style={styles.lTexts}>
				<Pressable onPress={handleLogout}>
					<Text style={styles.logout}>Logout</Text>
				</Pressable>
				<Pressable onPress={handleDelete}>
					<Text style={styles.delete}>Delete Account</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default Profile;
