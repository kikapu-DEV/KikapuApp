import { View } from "react-native";
import RightHeader from "../RightHeader/RightHeader";
import { images } from "../../../constants";
import styles from "./walletHeader.style";
import LWalletHeader from "./leftHeader/LWalletHeader";

function WalletHeader() {
  return (
    <View style={styles.container}>
      <LWalletHeader status="Active" />
      <RightHeader iconUrl={images.avatar1} dimensions="100%" />
    </View>
  );
}

export default WalletHeader;
