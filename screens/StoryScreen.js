import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect, useState } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const stories = [
  { id: 1, image: 'https://pbs.twimg.com/media/GVsDFs4W4AAVHbi?format=jpg&name=4096x4096', },
  { id: 2, image: 'https://pbs.twimg.com/media/GVhwo2dXkAA0xh6?format=jpg&name=large' ,},
  { id: 3, image: 'https://pbs.twimg.com/media/GVg53ZdXsAE3Zxf?format=jpg&name=4096x4096', },
  // เพิ่มภาพอื่น ๆ ตามต้องการ
];



    

export default function StoryScreen() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % stories.length;
      scrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // สไลด์ทุก ๆ 3 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกทำลาย
  }, [currentIndex]);

  const handlePress = () => {
    navigation.navigate('Post');
  };

  return (
    
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {stories.map((story) => (
        <Image key={story.id} source={{ uri: story.image }} style={styles.image} />
      ))}
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  image: {
    width: width,
    height: '100%', // ปรับตามขนาดหน้าจอหรือความต้องการ
    resizeMode: 'cover',
  },
});
