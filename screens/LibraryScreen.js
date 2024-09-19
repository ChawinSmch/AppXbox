import React, { useContext } from 'react';
import  { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { ThemeContext } from '../services/Theme';

const games = [
  { id: '1', name: 'Fortnite', imageUri: 'https://i.redd.it/tkq453ttioq51.jpg' },
  { id: '2', name: 'Minecraft', imageUri: 'https://i.sstatic.net/dqVlX.png' },
  { id: '3', name: 'EAFC24', imageUri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1723127153' },
  // เพิ่มข้อมูลเกมอื่น ๆ ตามต้องการ
];

export default function LibraryScreen({ navigation }) {

  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('GameDetail', { gameId: item.id })}
    >
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      {/* <Text style={styles.itemName}>{item.name}</Text> */}
    </TouchableOpacity>
  );


  return (
    <View style={{ flex: 1,         backgroundColor: theme === 'light' ? '#fff' : '#333',
    }}>
      <View>
            <Text style={{fontSize:40, color:'white', padding:20, backgroundColor: 'black'}}>My Library</Text>
            
        </View>

        <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    width: '48%', // กำหนดให้เป็น 48% ของความกว้างหน้าจอ เพื่อให้มีช่องว่างระหว่างสองช่อง
    margin: '1%', // กำหนดระยะขอบรอบ ๆ แต่ละกล่อง
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // เพิ่มเงาให้กับกล่อง
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  itemName: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
