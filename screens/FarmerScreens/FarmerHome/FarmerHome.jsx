import { ScrollView, Text, View } from "react-native";
import {
  Categories,
  BestSelling,
  RestHeader,
  Search,
} from "../../../components";
import { COLORS } from "../../../constants";
import { getUser } from "../../../helpers/secureStore";
import { useState, useEffect } from "react";

function FarmerHome() {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    const loggedInUser = await getUser();
    if (!loggedInUser) {
      navigation.navigate("login");
    }
    setUser(loggedInUser);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: COLORS.whiteText }}>
      <RestHeader user={user} />
      <Search />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 300 }}
        showsVerticalScrollIndicator={false}
      >
        <Categories />
        <BestSelling title="Recently Listed" />
      </ScrollView>
    </View>
  );
}

export default FarmerHome;
