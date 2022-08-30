import { StyleSheet, View, FlatList, ScrollView, Text } from 'react-native'
import React from 'react'
import FavoriteCard from '../components/FavoriteCard'
import { useSelector } from 'react-redux'

const FavoritesScreen = () => {
  const destinationIds = useSelector((state) => state.favorites.ids);

  console.log(destinationIds, 'ids')

  const destinationList = destinationIds.map((item) => {
      return <FavoriteCard id={item} key={item}/>
    }
  )

  if (destinationIds.length === 0 ) {
    return <View style={styles.noFavorites}>
      <Text>No favorites found. Add some!</Text>
    </View>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {destinationList}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  noFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
 
})

export default FavoritesScreen