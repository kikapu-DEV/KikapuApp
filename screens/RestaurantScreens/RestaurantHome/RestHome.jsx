import { Text, View } from "react-native"
import { Categories, RestHeader, Search } from "../../../components"

function RestHome() {
  return (
    <View>
      <RestHeader/>
      <Search/>
      <Categories/>
      <Text>Restaurant home</Text>
    </View>
  )
}

export default RestHome
