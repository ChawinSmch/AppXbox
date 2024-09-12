import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';
import Homescreen from '../screens/HomeScreen';
import FriendScreen from '../screens/FriendScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    
      <Tab.Navigator
         screenOptions={{
            tabBarStyle: {
              backgroundColor: '#353935', // สีพื้นหลังของแท็บเมนู
              height: 70, // ความสูงของแท็บบาร
            },
            
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white', // สีไอคอนเมื่อเลือกแล้ว
            tabBarInactiveTintColor: 'gray', // สีไอคอนเมื่อไม่ได้เลือก
            headerShown: false, // ซ่อน header bar
          }}
      >
        <Tab.Screen name="Home" component={Homescreen} 
            options={{
                tabBarIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={30} />
            ),
          }}/>
        <Tab.Screen name="Friend" component={FriendScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-friends" color={color} size={30} />
            ),
        }}/>
        <Tab.Screen name="Search" component={SearchScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                <EvilIcons name="search" color={color} size={40} />
            ),
        }}/>
        <Tab.Screen name="My Library" component={LibraryScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                <Ionicons name="library" color={color} size={30} />
            ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-circle" color={color} size={30} />
            ),
        }}/>
        
      </Tab.Navigator>
    
  );
}