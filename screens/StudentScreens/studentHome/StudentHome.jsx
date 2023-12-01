import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./studenthome.style";
import { COLORS, icons } from "../../../constants";
import { AvailableNear, Header, TopRestraunts } from "../../../components";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import { getUser } from "../../../helpers/secureStore";
import useAuth from "../../../helpers/hooks/useAuth";

function StudentHome() {
	const navigation = useNavigation();
	const { userInfo } = useAuth();
	const [search, setSearch] = useState("");

	const checkUser = async () => {
		if (!userInfo) {
			navigation.navigate("login");
		}
	};

	useEffect(() => {
		checkUser();
	}, [userInfo]);

	return (
		<View style={styles.container}>
			<Header user={userInfo} />
			<View style={styles.welcome}>
				<Text style={styles.welcomeText}>
					Find your favorite restaurant and menu near you
				</Text>
				<Ionicons
					name='ios-notifications-outline'
					size={24}
					color={COLORS.whiteText}
					style={styles.notificationIcon}
				/>
			</View>
			<ScrollView
				style={styles.homeDisplay}
				contentContainerStyle={{ paddingBottom: 30 }}
				showsVerticalScrollIndicator={false}
			>
				{/* search button */}
				<View style={styles.searchContainer}>
					<View style={styles.searchWrapper}>
						<TextInput
							style={styles.searchInput}
							value={search}
							placeholder='Search Restaurant'
							onChange={(e) => setSearch(e.target.value)}
						/>
					</View>
					<TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
						<Ionicons name='ios-search-outline' size={24} color='black' />
					</TouchableOpacity>
				</View>

				{/* TOP RESTAURANTS */}
				<TopRestraunts />
				<AvailableNear />
			</ScrollView>
		</View>
	);
}

export default StudentHome;
