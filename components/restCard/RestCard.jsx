import React from 'react'
import { Image, TouchableOpacity} from 'react-native'
import styles from './restCard.style';
import { images} from '../../constants';

const popularImages = [images.food1,images.food2, images.food3];

function RestCard({item}) {
  const imageSource = images[item];

  return (
    <TouchableOpacity 
    style={styles.container} 
    onPress={()=> handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={images.food1} resizeMode='contain'/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default RestCard
