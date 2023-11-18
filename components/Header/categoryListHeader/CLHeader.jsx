import { Text, View } from "react-native"
import styles from "./CLHeader.style"
import { Ionicons } from '@expo/vector-icons';

function CLHeader() {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-circle-outline" size={24} color="black" />
      <Text style={{fontWeight: '500'}}>Vegetables</Text>
      <Ionicons name="md-search-outline" size={24} color="black" />
    </View>
  )
}

export default CLHeader
