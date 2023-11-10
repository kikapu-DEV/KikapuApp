import { View } from "react-native";
import styles from "./header.style";
import RightHeader from "../RightHeader/RightHeader";
import LeftHeader from "./leftHeader/LeftHeader";
import { images } from "../../../constants";

function Header() {
  return (
    <View style={styles.container}>
      <LeftHeader userName="Paula" />
      <RightHeader iconUrl={images.avatar1} dimensions="100%" />
    </View>
  );
}

export default Header;
