import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { removeFavorite } from '../store/redux/favorites';
import { useDispatch } from 'react-redux'
import { destinations } from '../db/DUMMY_DATA'

const FavoriteCard = ({ id }) => {
  const [placeInfo, setPlaceInfo] = useState('');

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeFavorite({ id: id }))
  }


  const fetchData = () => {
    // console.log(destinations)
    console.log(id, 'place id')
    const destination = destinations.filter(item => item.id === id)
    console.log(destination, 'destination list')
    setPlaceInfo(destination[0])
  }

  useEffect(() => {
    fetchData();
  }, [id, dispatch])
  
  return (
    <Pressable 
        android_ripple={{ color: '#ccc' }}
        style={({pressed}) => [styles.container, pressed && styles.pressed]}>
        <Image style={styles.image}  source={placeInfo.img} />
        <View style={styles.details}>
            <Text style={styles.text}>{placeInfo.name}</Text>
            <View style={styles.locationBox}>
                <Ionicons name="location-outline" size={16} color="#f37917" />
                <Text style={styles.locationText}>{placeInfo.location}</Text>
            </View>
            <View style={styles.rating}>
                <FontAwesome name="star" size={16} color="#ebde0e" />
                <Text style={styles.ratingText}>{placeInfo.rating}</Text>
            </View>
            <View>
                <Text style={styles.priceText}>${placeInfo.price}</Text> 
                <Text style={styles.priceCont}>/ person</Text>
            </View>
            <Pressable style={styles.removeButton}>
              <Pressable 
                  onPress={removeHandler}
              >
                <Text style={styles.removeText}>Remove</Text>
              </Pressable>
            </Pressable>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 15,
        width: 320,
        height: 180,
        backgroundColor: '#fff',
        borderRadius: 3,
        overflow: 'hidden',
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: '50%',
        height: '90%',
        borderRadius: 100,
        elevation: 4,
      },
      pressed: {
        opacity: 0.7
      },
      details: {
        marginLeft: 20
      },
      text: {
        fontSize: 20,
        // fontWeight: '500'
      },
      locationBox: {
        paddingVertical: 5,
        flexDirection: 'row'
      },
      locationText: {
        fontWeight: '500',
        fontSize: 14,
      },
      rating: {
        flexDirection: 'row',
        paddingBottom: 5
      },
      ratingText: {
        marginLeft: 3,
        color: '#bfc1c3'
      },
      priceText: {
        fontSize: 18,
        color: '#308ae2'
      },
      priceCont: {
        color: '#bfc1c3'
      },
      removeButton: {
        position: 'absolute',
        top: -20,
        right: -20
      },
      removeText: {
        color: 'red'
      }
})

export default FavoriteCard