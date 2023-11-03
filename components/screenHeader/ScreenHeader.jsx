import { Image, TouchableOpacity, View } from "react-native";
import styles from "./screenheader.style";

function ScreenHeader({ iconUrl, dimensions, handlePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimensions)}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ScreenHeader;
