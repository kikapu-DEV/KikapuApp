import React from 'react'
import { Image, TouchableOpacity, View} from 'react-native'
import styles from './restCard.style';

function RestCard({item}) {
  return (
    <TouchableOpacity 
    style={styles.container(item)} 
    onPress={()=> handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(item)}>
        
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default RestCard
