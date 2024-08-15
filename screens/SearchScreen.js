import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SearchScreen() {
  return (
    <View style={{ flex: 1, backgroundColor:'#333333'}}>
        <View>
            <Text style={{fontSize:40, color:'white', padding:20}}>Search</Text>
            
        </View>
        <View style={styles.searchContainer}>
            <Ionicons name="search-sharp" size={24} color="black" style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Search for people, game, and more"
            placeholderTextColor="gray"
      />
    </View>
    </View>
  );

  
}
const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 9,
      
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
});