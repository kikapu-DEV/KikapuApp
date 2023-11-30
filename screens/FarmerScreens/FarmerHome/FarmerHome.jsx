import { ScrollView, Text, View } from "react-native";
import {
	Categories,
	BestSelling,
	RestHeader,
	Search,
} from "../../../components";
import { COLORS } from "../../../constants";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../../helpers/hooks/useAuth";

function FarmerHome() {
	const navigation = useNavigation();
	const { userInfo } = useAuth();

	const checkUser = async () => {
		if (!userInfo) {
			navigation.navigate("login");
		}
	};

	useEffect(() => {
		checkUser();
	}, [userInfo]);

	return (
		<View style={{ height: "100%", backgroundColor: COLORS.whiteText }}>
			<RestHeader user={userInfo} />
			<Search />

			<ScrollView
				contentContainerStyle={{ paddingBottom: 300 }}
				showsVerticalScrollIndicator={false}
			>
				<Categories />
				<BestSelling title='Recently Listed' />
			</ScrollView>
		</View>
	);
}

export default FarmerHome;
