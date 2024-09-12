import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
  { id: 1, uri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1723127153', screen: 'OtherScreen'},
  { id: 2, uri: 'https://i.sstatic.net/dqVlX.png', screen: 'OtherScreen'},
  { id: 3, uri: 'https://www.gameojo.com/wp-content/uploads/2018/08/%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%AA%E0%B9%8C-Grand-Theft-Auto-V-2.jpg', screen: 'OtherScreen'},
  { id: 4, uri: 'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg', screen: 'OtherScreen'},
  { id: 5, uri: 'https://i.redd.it/tkq453ttioq51.jpg', screen: 'OtherScreen'}
  
];

export default function Games() {
  const navigation = useNavigation();

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {images.map((image) => (
        <TouchableOpacity 
          key={image.id} 
          onPress={() => handlePress(image.screen)} 
          style={styles.imageContainer}
        >
          <Image source={{ uri: image.uri }} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
  },
  imageContainer: {
    marginRight: 10, // ช่องว่างระหว่างรูป
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
