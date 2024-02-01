import { ScrollView, Text, View } from "react-native";
import {
	Categories,
	BestSelling,
	RestHeader,
	Search,
} from "../../../components";
import { COLORS } from "../../../constants";
import useAuth from "../../../helpers/hooks/useAuth";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function RestHome() {
	const { userInfo } = useAuth();
	const navigation = useNavigation();

	useEffect(() => {
		const checkUser = async () => {
			if (!userInfo) {
				navigation.navigate("login");
			}
		};

		checkUser();

		// return a destroy function

		return () => {
			console.log("destroy");
		};
	}, [userInfo, navigation]);

	return (
		<View style={{ height: "100%", backgroundColor: COLORS.whiteText }}>
			<RestHeader user={userInfo} />
			<Search />

			<ScrollView
				contentContainerStyle={{ paddingBottom: 300 }}
				showsVerticalScrollIndicator={false}
			>
				<Categories />
				<BestSelling title='Best selling' />
			</ScrollView>
		</View>
	);
}

export default RestHome;
