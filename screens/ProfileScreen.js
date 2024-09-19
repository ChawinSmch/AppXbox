import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../services/Theme';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ProfileScreen() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
      }}
    >
      <Text style={{ color: theme === 'light' ? '#000' : '#fff', fontSize: 24 }}>
        โหมด: {theme}
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 20 }}>
        <MaterialIcons
          name={theme === 'light' ? 'wb-sunny' : 'brightness-2'}
          size={40}
          color={theme === 'light' ? '#000' : '#fff'}
        />
      </TouchableOpacity>
    </View>
  );
}

