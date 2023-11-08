import { View } from "react-native";
import styles from "./header.style";
import ScreenHeader from "../screenHeader/ScreenHeader";
import RightHeader from "../rightHeader/RightHeader";
import { images } from "../../constants";

function Header() {
  return (
    <View style={styles.container}>
      <RightHeader userName="Paula" />
      <ScreenHeader iconUrl={images.avatar1} dimensions="100%" />
    </View>
  );
}

export default Header;
