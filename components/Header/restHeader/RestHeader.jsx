import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './restHeader.style'
import { COLORS, images } from '../../../constants'
import { Ionicons } from '@expo/vector-icons';

function RestHeader() {
  return (
    <View style={styles.container}>
      {/* header left */}
      <View style={styles.leftHeader}>
          <Image source={images.avatar1}/>
          <View>
            <Text style={styles.txt1}>Good Morning</Text>
            <Text style={styles.txt2}>Amelia Kirui</Text>
          </View>
      </View>

      {/* header right */}
      <View style={styles.rightHeader}>
        <TouchableOpacity>
          <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={24} color={COLORS.secondary} />
          <Text style={styles.txt3}>Nairobi</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RestHeader
