import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'
import { checkImageURL } from '../../../../utils/index.utils'
import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >

    <TouchableOpacity
      style={styles.logoContainer(selectedJob, item)}
    >
      <Image 
        source={{ uri: checkImageURL(item.employer_logo)
        ? item.employer_logo : 'https://cdn-icons-png.flaticon.com/512/3688/3688609.png'
        }}
        resizeMode="contain"
        style={styles.logoImage}
      />

    </TouchableOpacity>

    <Text style={styles.companyName} numberOfLines={1}> {item.employer_name}</Text> 

    <View style={styles.infoContainer}> 
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}> {item.job_title}</Text>
      <Text style={styles.location} > {item.job_country}</Text>
    
    </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard