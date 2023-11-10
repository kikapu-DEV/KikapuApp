import { View } from "react-native"
import ScreenHeader from "../RightHeader/RightHeader"
import { images } from "../../../constants"
import styles from "./walletHeader.style"
import LWalletHeader from "./leftHeader/LWalletHeader"

function WalletHeader() {
  return (
    <View style={styles.container}>
        <LWalletHeader status="Active"/>
      <ScreenHeader iconUrl={images.avatar1} dimensions="100%" />
    </View>
  )
}

export default WalletHeader
