import { FlatList, Text, View } from 'react-native'
import styles from './order.style'
import { OrderCard } from '../../../components'

function Order() {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Previous orders</Text>

            <View style={styles.orderListContainer}>
                  <FlatList
                  data={[1,2,3,4,5]}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item})=> <OrderCard/>}
                  showsVerticalScrollIndicator={false}
                  />
            </View>
    </View>
  )
}

export default Order
