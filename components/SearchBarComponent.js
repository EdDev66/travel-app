import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from "react-native-dynamic-search-bar";



const SearchBarComponent = ({ onChange, clearFilter }) => {
  return (
      <SearchBar
          style={styles.searchBar}
          placeholder="Search here"
          // onPress={() => alert("onPress")}
          onClearPress={clearFilter}
          onChangeText={(text) => onChange(text)}
        />
  )
}

const styles = StyleSheet.create({
  searchBar: {
    elevation: 3,
  }
})

export default SearchBarComponent