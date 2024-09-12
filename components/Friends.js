import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const items = [
  {
    id: 1,
    imageUri: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/985609_1.jpg',
    name: 'Ronaldo',
    description: 'Last seen 99d ago', screen: 'OtherScreen'
  },
  {
    id: 2,
    imageUri: 'https://www.lanacion.com.ar/resizer/v2/lionel-messi-con-mate-en-mano-presencio-el-HMX52GMXCZAI3DXQNILAPMQLOM.JPG?auth=44732360da31d164ad86bcc40359c81575338cc98cba488b8ec7a1fe2198871c&width=880&height=586&quality=70&smart=true',
    name: 'Messi',
    description: 'Last seen 99d ago', screen: 'OtherScreen'
  },
  {
    id: 3,
    imageUri: 'https://static.bangkokpost.com/media/content/dcx/2023/08/14/4859914.jpeg',
    name: 'Prayost',
    description: 'Online', screen: 'OtherScreen'
  },
  // Add more items as needed
];

export default function Friends() {
    const navigation = useNavigation();

    const handlePress = (screen) => {
      navigation.navigate(screen);
    };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handlePress(item.screen)}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
  },
  itemContainer: {
    width: 200,
    height: 260,
    backgroundColor: '#555', // สีเทา
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  textContainer: {
    marginTop: 10,
    // alignItems: 'center',
  },
  itemName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  itemDescription: {
    fontSize: 17,
    color: 'white',
    textAlign: 'left',
  },
});
