import { ScrollView, Text, View } from "react-native";
import {
  Categories,
  BestSelling,
  RestHeader,
  Search,
} from "../../../components";
import { COLORS } from "../../../constants";

function RestHome() {
  return (
    <View style={{height: '100%', backgroundColor: COLORS.whiteText}}>
      <RestHeader />
      <Search />

      <ScrollView contentContainerStyle={{paddingBottom: 300}} showsVerticalScrollIndicator={false}>
        <Categories />
        <BestSelling />
      </ScrollView>
    </View>
  );
}

export default RestHome;
