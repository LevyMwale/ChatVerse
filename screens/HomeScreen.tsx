import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, Entypo, FontAwesome  } from '@expo/vector-icons'; 

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (

   
    <View style={styles.page}>
        <Pressable style={{
        backgroundColor: 'red',
        height: 50,
        width: '50%',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center'
      }}>
        <Text style={{
          color: 'white',
          bottom: 4,
          fontWeight: 'bold'
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
    height: 45,
    width: '100%',
    borderRadius: 20,
    padding: 17,
    alignSelf: 'center',
    top: 1,
    borderWidth: 1,
    borderColor: 'teal',
    
  
    
  
    
  },

});





