import { ScrollView, Text, View } from "react-native";
import {
  Categories,
  BestSelling,
  RestHeader,
  Search,
} from "../../../components";

function RestHome() {
  return (
    <View>
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
