import { Button, Text, View } from "react-native"

import styles from './login.styles'
function Login({navigation}) {
  return (
    <View>
      <Text>This is the login page</Text>
      <Button title="onboarding" onPress={()=> navigation.navigate("onBoarding")}/>
    </View>
  )
}

export default Login
