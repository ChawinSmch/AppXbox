import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Games from '../components/Games';

// สร้าง Top Tab Navigator
const Tab = createMaterialTopTabNavigator();

// ข้อมูลโพสต์ตัวอย่างที่รวมรูปภาพ
const posts = [
  { id: '1', content: 'Just achieved a new high score in Fortnite!', imageUri: 'https://i.redd.it/tkq453ttioq51.jpg' },
  { id: '2', content: 'Loving the new Minecraft update!', imageUri: 'https://i.sstatic.net/dqVlX.png' },
  { id: '3', content: 'Played EAFC24 all night and it was awesome!', imageUri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1723127153' },
  // เพิ่มโพสต์อื่น ๆ ได้ตามต้องการ
];

// คอมโพเนนต์สำหรับแท็บ Posts
const PostsTab = () => (
  <View style={styles.tabContainer}>
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Image source={{ uri: item.imageUri }} style={styles.postImage} />
          <Text style={styles.postContent}>{item.content}</Text>
        </View>
      )}
    />
  </View>
);

// คอมโพเนนต์สำหรับแท็บ About (เรียกหน้าที่มีอยู่แล้ว)
const AboutTab = () => (
  <View style={styles.tabContainer}>
    <Text style={styles.tabText}>Games you play:</Text>
    {/* สามารถนำหน้า Games มาใช้แสดงในส่วนนี้ */}
  </View>
);

export default function ProfileScreen({ navigation }) {
  // ข้อมูลผู้ใช้
  const user = {
    name: 'พี่ เซี้ ย น #1169     ',
    info: '#Gamer , #sleepers',
    status: 'online', // สถานะผู้ใช้: online หรือ offline
    imageUri: 'https://i.pinimg.com/564x/d7/c2/ef/d7c2ef8c9b2eb4706580ad58b8eb0061.jpg', // รูปภาพโปรไฟล์ของผู้ใช้
  };

  // ฟังก์ชันที่ทำงานเมื่อกดปุ่มตั้งค่า
  const handleSettingsPress = () => {
    console.log('Settings button pressed');
    // สามารถใช้ navigation เพื่อไปยังหน้าการตั้งค่าได้
  };

  return (
    <View style={styles.container}>
      {/* ปุ่มตั้งค่าที่มุมขวาบน */}
      <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
        <FontAwesome name="cog" size={24} color="white" />
      </TouchableOpacity>
      
      {/* แสดงข้อมูลโปรไฟล์ของผู้ใช้ */}
      <View style={styles.profileInfo}>
        <Image source={{ uri: user.imageUri }} style={styles.profileImage} />
        <Text style={styles.profileName}>
          {user.name}
          <Text style={[styles.profileStatus, user.status === 'online' ? styles.online : styles.offline]}>
            {` ${user.status === 'online' ? 'Online' : 'Offline'}`}
          </Text>
        </Text>
        <Text style={styles.profileInfoText}>{user.info}</Text>
      </View>

      {/* Tab Navigator */}
      <Tab.Navigator style={{top: 30,}}>
        <Tab.Screen name="Posts" component={PostsTab} />
        <Tab.Screen name="About" component={Games} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // พื้นหลังสีเข้ม
  },
  settingsButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
    top: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  profileInfoText: {
    fontSize: 16,
    color: 'white',
  },
  profileStatus: {
    marginLeft: 10, // เพิ่มระยะห่างระหว่างชื่อและสถานะ
    padding: 5,
    borderRadius: 5,
  },
  online: {
    color: 'green',
    fontWeight: 'bold',
  },
  offline: {
    color: 'gray',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#333333',
    
  },
  tabText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  postContainer: {
    backgroundColor: '#444444',
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postContent: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});
