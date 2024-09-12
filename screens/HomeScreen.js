import React, { useRef, useState } from 'react';
import { View, ScrollView, Animated, Dimensions, Text, Image } from 'react-native';
import {Ionicons, FontAwesome6, MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Games from '../components/Games';
import Friends from '../components/Friends';
// import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function Homescreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [backgroundImage, setBackgroundImage] = useState('https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg'); // ตั้งค่าเริ่มต้น
  const windowHeight = Dimensions.get('window').height;
  const images = [
    { uri: 'https://i.sstatic.net/dqVlX.png', background: 'https://i.sstatic.net/dqVlX.png' }, 
    { uri: 'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg', background: 'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg' }, 
    { uri: 'https://i.redd.it/tkq453ttioq51.jpg', background: 'https://i.redd.it/tkq453ttioq51.jpg' }, 
    // รูปอื่นๆ
  ];
  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / Dimensions.get('window').width);
    if (index >= 0 && index < images.length) {
      setBackgroundImage(images[index].background);
    }
  };

  // interpolate background color between blur and black
  const backgroundColor = scrollY.interpolate({
    inputRange: [0, windowHeight / 3],
    outputRange: ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 1)'],
    extrapolate: 'clamp',
  });

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Post');
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor:
        //'green'
        //'black'
        '#333333'
       //'#f8f8f8',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      // bottom: 0,
      width: '100%',
      height: 500,
      resizeMode: 'cover',
      
    },
    
    tabBar: {
      zIndex: 999999,
      position: 'absolute',
      top: 0, // วางตำแหน่งที่ด้านบนสุดของหน้าจอ
      left: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 30,
      paddingTop:30,
      //paddingbottom:20
    },
    iconLeft: {
      marginRight: 16,
      color: '#fff',
      paddingHorizontal:5
    },
    iconRight: {
      marginLeft: 16,
      color: '#fff',
      paddingHorizontal:5
    },
    rightIcons: {
      flexDirection: 'row',
    },
    scrollContainer: {
        padding: 16,
        
      },
      itemContainer: {
        width: Dimensions.get('window').width - 32, // ขนาดของกรอบ
        height: 400, // ความสูงของกรอบ
        backgroundColor: '#fff', // สีพื้นหลังกรอบ
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16, // ระยะห่างระหว่างกรอบ
        justifyContent: 'center',
        alignItems: 'center',
        
        zIndex: 99,
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
      },
      text: {
        // position: 'absolute',
        
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
    
  };

  return (
    <View style={[styles.container ,{height: 1500} ]}>
      
      <Animated.View style={[styles.tabBar, { backgroundColor }]}>
      <FontAwesome6 name="xbox" size={30} style={styles.iconLeft} />
        <View style={styles.rightIcons}>
          <MaterialIcons name="cast-connected" size={30} style={styles.iconRight} />
          <Ionicons name="notifications" size={30} style={styles.iconRight} />
        </View>
      </Animated.View>
     
      <ScrollView 
        // contentContainerStyle={{ paddingTop: 75 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        // scrollEventThrottle={16}
      >
        <View>
          <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
        <View>

        </View>
        </View>

        <ScrollView
        horizontal={true}// กำหนดให้สไลด์ในแนวนอน
        showsHorizontalScrollIndicator={false} // ซ่อนแถบเลื่อนแนวนอน
        onScroll={handleScroll}
        pagingEnabled// ให้ ScrollView หยุดที่แต่ละหน้า
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 91 }}
        >

        {images.map((image, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
        
        </ScrollView>
        <ScrollView >
        {/* Your content goes here */}
        <View style={{ height: 950}}>
          <View style={{ padding:15}}>
          {/* <Text>Scroll to see the effect...</Text> */}
          <Text style={{ color:'white', fontSize:25,fontWeight: 'bold'}}>Official posts from games</Text>
          {/* สร้างComponent  */}
          <View style={{padding:10, }}>
            <TouchableOpacity onPress={handlePress}>
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1823052013028147200/nkkCiNHn_400x400.jpg' , screen: 'OtherScreen'}} style={{borderColor: 'red',borderWidth:2,borderRadius: 50,width: 100,height: 100,}}/>
            </TouchableOpacity>
          </View>
          <Text style={{ color:'white', fontSize:25,paddingTop:10, fontWeight: 'bold'}}>Active friends</Text>
          <View>
            <Friends/>
          </View>
          <Text style={{ color:'white', fontSize:25,paddingTop:10, fontWeight: 'bold'}}>Popula Games</Text>
          <View >
            <Games/>
          </View>
        </View>
        </View>
        
        </ScrollView>
        
      </ScrollView>
      
    </View>
  );
}
