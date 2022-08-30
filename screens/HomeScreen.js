import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import ProfileBar from '../components/ProfileBar'
import SearchBar from '../components/SearchBarComponent'
import Card from '../components/Card'
import CategoryCard from '../components/CategoryCard'
import { destinations, categories } from '../db/DUMMY_DATA'

const HomeScreen = ({ navigation }) => {
  const [filterApplied, setFilterApplied] = useState(false)
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  
  const renderDestination = ({ item }) => {

    const cardPressHandler = () => {
      navigation.navigate('Destination', {
        id: item.id,
        name: item.name,
        location: item.location,
        price: item.price,
        image: item.img,
        rating: item.rating
      })
    }

    return (
      <Card 
          name={item.name} 
          location={item.location} 
          price={item.price}
          image={item.img}
          onPress={cardPressHandler}
      />
    )
  }

  const renderCategory = ({ item }) => {

    const handleCategoryPress = (props) => {
      const filter = destinations.filter(element => element.category === props)
      setFilteredDestinations(filter)
      setFilterApplied(true)
    }

    return (
      <CategoryCard 
          onPress={() => handleCategoryPress(item.name)} 
          name={item.name} 
          image={item.img}
      />
    )
  }

  const resetFilters = () => {
    setFilteredDestinations(destinations)
  }

  const searchHandler = (value) => {
    console.log(value)
    const filter = destinations.filter(element => element.name === value)
    setFilteredDestinations(filter)
  }

  const clearHandler = () => {
    setFilteredDestinations(destinations)
  }

  return (
    <View style={styles.container}>
      <ProfileBar />
      <SearchBar onChange={searchHandler} clearFilter={clearHandler}/>
      <Text style={styles.heading}>Popular Destinations</Text>
      {/* Destination list here TODO */}
      {filteredDestinations.length === 0 ? <View><Text>No destinations found!</Text></View> : (
            <FlatList 
            style={{paddingVertical: 10}}
            data={filteredDestinations} 
            renderItem={renderDestination} 
            horizontal={true}
            keyExtractor={item => item.id}
            />
      )}
     
      <View style={styles.categoriesFilter}>
      <Text style={styles.heading}>Categories</Text>
      {filterApplied && <Pressable onPress={resetFilters} android_ripple={{ color: '#ccc' }}><Text>Clear</Text></Pressable>}
      </View>
      {/* Categories list here TODO */}
      <FlatList 
        data={categories} 
        renderItem={renderCategory}
        horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 25
    padding: 10,
  },
  categoriesFilter: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  clearFilters: {
    
  },
  heading: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: '500'
  }
})

export default HomeScreen