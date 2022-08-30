import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import ReadMore from 'react-native-read-more-text';
import { addFavorite } from '../store/redux/favorites';

const DestinationScreen = ({ route }) => {
  const { id, location, price, name, image, rating } = route.params

  const [iconPressed, setIconPressed] = useState(false)

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const iconPressHandler = () => {
    dispatch(addFavorite({ id: id }))
    setIconPressed(prevState => !prevState)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome 
            name={iconPressed ? 'star' : "star-o"}
            size={24} 
            color={iconPressed ? 'orange' : "black"}
            onPress={iconPressHandler}
        /> 
      )
    })
  }, [])

  const _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: '#308ae2', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  const _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#308ae2', marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={24} color="orange" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.locationBox}>
            <Ionicons name="location-outline" size={32} color="orange" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.price}>${price}</Text>
            <Text>/person</Text>
          </View>
        </View>
        <Text style={styles.descriptionHeader}>One of the best destinations in Greece</Text>
        <View  style={styles.descriptionContainer}>
        <ReadMore 
            numberOfLines={2} 
            renderTruncatedFooter={_renderTruncatedFooter}
            renderRevealedFooter={_renderRevealedFooter}
        >
              <Text style={styles.description}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum</Text>
        </ReadMore>
        </View>
        <View style={styles.button}>
          <CustomButton 
              title='Book Now' 
              onPress={() => console.log('testtt')}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '60%'
    },
    infoContainer: {
      alignItems: 'center',
      paddingVertical: 2,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    ratingContainer: {
      flexDirection: 'row'
    },
    title: {
      fontSize: 32,
      fontWeight: '600'
    },
    locationBox: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    locationText: {
      fontSize: 18,
      color: '#bfc1c3'
    },
    rating: {
      marginLeft: 5,
      fontSize: 18,
    },
    priceBox: {
    },
    price: {
      color: '#308ae2',
      fontSize: 22
    },
    descriptionHeader: {
      padding: 10,
      fontSize: 18,
      fontWeight: '600'
    },
    descriptionContainer: {
      paddingHorizontal: 10,
      paddingBottom: 5,
    },
    description: {
      color: '#bfc1c3',
    },
    button: {
      padding: 10,
      justifyContent: 'flex-start'
    }
})

export default DestinationScreen