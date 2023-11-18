import { Text, View } from "react-native"
import { RestHeader, Search } from "../../../components"

function RestHome() {
  return (
    <View>
      <RestHeader/>
      <Search/>
      <Text>Restaurant home</Text>
    </View>
  )
}

export default RestHome
