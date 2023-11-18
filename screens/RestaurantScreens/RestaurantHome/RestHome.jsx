import { ScrollView, Text, View } from "react-native";
import {
  Categories,
  RecentlyListed,
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
        <RecentlyListed />
      </ScrollView>
    </View>
  );
}

export default RestHome;
