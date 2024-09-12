import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const games = [
  { id: '1', name: 'Fortnite', imageUri: 'https://i.redd.it/tkq453ttioq51.jpg' },
  { id: '2', name: 'Minecraft', imageUri: 'https://i.sstatic.net/dqVlX.png' },
  { id: '3', name: 'EAFC24', imageUri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1723127153' },
  // เพิ่มข้อมูลเกมอื่น ๆ ตามต้องการ
];

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [hasResults, setHasResults] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = games.filter(game =>
      game.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredGames(filtered);
    setHasResults(filtered.length > 0);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('GameDetail', { gameId: item.id })}
    >
      <Image source={{ uri: item.imageUri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#333333' }}>
      <View>
        <Text style={{ fontSize: 40, color: 'white', padding: 20, backgroundColor: 'black' }}>Search</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={24} color="white" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search games..."
            value={search}
            placeholderTextColor="white"
            onChangeText={handleSearch}
          />
        </View>
        {/* แสดงผลลัพธ์การค้นหาเฉพาะเมื่อมีข้อความค้นหาเท่านั้น */}
        {search.length > 0 && hasResults && (
          <FlatList
            data={filteredGames}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        )}
        {/* แสดงข้อความเมื่อไม่มีผลลัพธ์ */}
        {search.length > 0 && !hasResults && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No results found.</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    
  },
  itemContainer: {
    width: '48%', 
    margin: '1%', 
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    color: 'white',
    fontSize: 18,
  },
});
