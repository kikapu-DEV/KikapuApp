import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './onboarding.style'
import { COLORS, images } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

function Onboarding() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>KIKAPU<Text style={{color: COLORS.secondary}}>.</Text></Text>
      <Text style={styles.tagLine}>Revolutionizing food supply chain in <Text style={{color: COLORS.secondary}}>Africa</Text> </Text>
      <Image source={images.foodBasket} resizeMode='contain' style={styles.basketImage}/>
    
    {/* LOGIN BUTTON */}
      <TouchableOpacity onPress={()=> navigation.navigate("login")} >
        <View style={styles.onBoardLoginBtn}>
            <Text style={styles.btnText}>Login</Text>
        </View>
      </TouchableOpacity>

      {/* SIGNUP BUTTON */}
      <TouchableOpacity onPress={()=> navigation.navigate("signup")} >
        <View style={styles.onBoardSignUpBtn}>
            <Text style={styles.btnText2}>Sign up</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Onboarding
