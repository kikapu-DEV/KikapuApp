import { FlatList, ScrollView, Text, View } from "react-native"
import { Button2, TransactionH, WalletHeader } from "../../../components"
import styles from "./wallet.style"
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, SIZES } from "../../../constants";

const iconList = [
  {iconName: 'exchange', title:'Transfer'},
  {iconName: 'credit-card', title:'Payment'},
  {iconName: 'plus', title:'Top-up'}
]
function Wallet() {
  return (
    <View style={styles.container}>
      <WalletHeader/>
      {/* wallet card */}
      <View style={styles.walletCardContainer}>
          <View style={styles.walletCard}>
            <View style={styles.leftContent}>
                <Text style={styles.leftContentText}>Balance</Text>
                <Text  style={styles.leftContentText2}>Ksh. 2000</Text>
            </View>
            <View style={styles.rightContent}>
            <FontAwesome name="long-arrow-right" size={24} color="white" />
            </View>
          </View>
      </View>
      {/* wallet functionality */}
    <View style={styles.functionalityContainer}>
      <FlatList 
      data={iconList}
      keyExtractor={(item, index) => index.toString()}
      horizontal = {true}
      contentContainerStyle={{columnGap: SIZES.xLarge}}
      renderItem={({item})=>(
        <Button2 icon={<FontAwesome name={item.iconName} size={18} color={COLORS.secondary}/>} title={item.title}/>
      )}
      />
        
    </View>

      {/* transaction history */}
      <TransactionH/>
    </View>
  )
}

export default Wallet
