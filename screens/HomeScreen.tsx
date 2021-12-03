import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, Entypo, FontAwesome  } from '@expo/vector-icons'; 

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (

   
    <View style={styles.page}>
        <Pressable style={{
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        
      }}>
        <Text style={{
          color: 'teal',
          bottom: 4,
        }}>Logout</Text>
      </Pressable>
       <View style={styles.accessContainer}>
      </View>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => 
        <Text style={styles.text}>Messages</Text>}
      /> 
    </View>
   
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1F2F35'
  },
  text: {
    fontWeight: 'bold',
    color: '#FEF9E7',
    fontSize: 17,
    left: 7,
    top: -2,
  
  },
  accessContainer: {
    backgroundColor: 'orange',
    height: 40,
    width: '100%',
    borderRadius: 20,
    padding: 13,
    alignSelf: 'center',
    top: -14,
    borderWidth: 1,
    borderColor: 'teal',
    
  
    
  
    
  },

});





