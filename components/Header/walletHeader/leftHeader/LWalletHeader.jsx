import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './lwalletheader.style'

function LWalletHeader({status}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.walletTitle}>Wallet</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  )
}

export default LWalletHeader
