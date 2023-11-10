import { Image, TouchableOpacity, View } from "react-native";
import styles from "./rightheader.style";
import { useNavigation } from "@react-navigation/native";

function RightHeader({ iconUrl, dimensions}) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={()=> navigation.navigate('Profile')}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimensions)}
        />
      </TouchableOpacity>
    </View>
  );
}

export default RightHeader;
