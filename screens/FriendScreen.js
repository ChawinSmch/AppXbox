import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const friends = [
  { id: '1', name: 'โด้', status: 'online', imageUri: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/985609_1.jpg' },
  { id: '2', name: 'เมส', status: 'offline', imageUri: 'https://www.lanacion.com.ar/resizer/v2/lionel-messi-con-mate-en-mano-presencio-el-HMX52GMXCZAI3DXQNILAPMQLOM.JPG?auth=44732360da31d164ad86bcc40359c81575338cc98cba488b8ec7a1fe2198871c&width=880&height=586&quality=70&smart=true' },
  { id: '3', name: 'ฏู่', status: 'online', imageUri: 'https://static.bangkokpost.com/media/content/dcx/2023/08/14/4859914.jpeg' },
  // เพิ่มข้อมูลเพื่อนคนอื่น ๆ ตามต้องการ
];

const chats = [
  { id: '1', name: 'ฏู่', message: ': 10k ดิจิม่อนไม่มีจริง เอ็งโดนหลอกแล้ว ไอหนุ่ม', imageUri: 'https://static.bangkokpost.com/media/content/dcx/2023/08/14/4859914.jpeg' },
  { id: '2', name: 'โด้', message: ': หิวกะเพราหมูกรอบอ่ะ ตารางเมนูมีแต่สลัดผัก ไอสลัด', imageUri: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/985609_1.jpg' },
  { id: '3', name: 'เมส', message: ': เอ็งว่าข้าซื้อโกลเด้นเตทเลยดีไหม ข้าอยากเห็นบรอนกับรี่เล่นด้วยกันว่ะ', imageUri: 'https://www.lanacion.com.ar/resizer/v2/lionel-messi-con-mate-en-mano-presencio-el-HMX52GMXCZAI3DXQNILAPMQLOM.JPG?auth=44732360da31d164ad86bcc40359c81575338cc98cba488b8ec7a1fe2198871c&width=880&height=586&quality=70&smart=true' },
  // เพิ่มข้อมูลแชทอื่น ๆ ตามต้องการ
];

const FriendsTab = () => (
  <FlatList
    data={friends}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View style={styles.friendItem}>
        <Image source={{ uri: item.imageUri }} style={styles.friendImage} />
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={[styles.friendStatus, item.status === 'online' ? styles.online : styles.offline]}>
          {item.status}
        </Text>
      </View>
    )}
  />
);

const ChatsTab = () => (
  <FlatList
    data={chats}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.chatItem}>
        <Image source={{ uri: item.imageUri }} style={styles.chatImage} />
        <View style={styles.chatInfo}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatMessage}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);


export default function FriendScreen() {
  return (
    <View style={{ flex: 1}}>
      <View>
            <Text style={{fontSize:40, color:'white', padding:20, backgroundColor: 'black'}}>Friend</Text>
            
        </View>
        <Tab.Navigator>
      <Tab.Screen name="Friends" component={FriendsTab} />
      <Tab.Screen name="Chats" component={ChatsTab} />
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  friendStatus: {
    marginLeft: 'auto',
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
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  chatImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: 'gray',
  },
});